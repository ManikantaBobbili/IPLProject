// import { Component, OnInit } from "@angular/core";
// import { IplService } from "../../services/ipl.service";
// import { Router } from "@angular/router";
// import { Team } from "../../types/Team";
// import { Cricketer } from "../../types/Cricketer";
// import { Match } from "../../types/Match";
// import { AuthService } from "src/app/auth/services/auth.service";

// @Component({
//     selector: 'app-dashboard',
//       templateUrl: './dashboard.component.html',
//       styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit{
//     teams:Team[] = [];
//     cricketers:Cricketer[] = [];
//     matches:Match[] = [];
//     userRole:string|null ='';

//     constructor(private iplService:IplService, private router:Router, private authService:AuthService){}

//     ngOnInit(): void {
//         this.userRole = this.authService.getRole();
//         if(this.userRole === "ADMIN"){
//             this.getTeams()
//             this.getCricketers();
//             this.getMatches();
//         }else if(this.userRole === "USER"){
//             this.getTeams()
//             this.getCricketers();
//             this.getMatches();
//         }
//     }


//     getTeams(){
//         this.iplService.getAllTeams().subscribe((res:Team[])=>this.teams = res);
//     }


//     getCricketers(){
//         this.iplService.getAllCricketers().subscribe((ckts:Cricketer[])=>this.cricketers = ckts);
//     }

//     getMatches(){
//         this.iplService.getAllMatches().subscribe((matchs:Match[])=>this.matches = matchs);
//     }
    

 

// }

// import { Component, OnInit } from '@angular/core';
// import { IplService } from "../../services/ipl.service";
// import { HttpErrorResponse } from "@angular/common/http";

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss']
// })
// export class DashboardComponent implements OnInit {
//   teams: any[] = [];
//   cricketers: any[] = [];
//   matches: any[] = [];
//   userRole: string = 'USER'; // or 'ADMIN' based on your logic

//   successMessage: string | null = null;
//   errorMessage: string | null = null;

//   constructor(private iplService: IplService) {}

//   ngOnInit(): void {
//     this.loadTeams();
//     this.loadCricketers();
//     this.loadMatches();
//   }

//   private loadTeams(): void {
//     this.iplService.getAllTeams().subscribe(
//       (response: any[]) => {
//         this.teams = response;
//       },
//       (error: HttpErrorResponse) => {
//         this.handleError(error);
//       }
//     );
//   }

//   private loadCricketers(): void {
//     this.iplService.getAllCricketers().subscribe(
//       (response: any[]) => {
//         this.cricketers = response;
//       },
//       (error: HttpErrorResponse) => {
//         this.handleError(error);
//       }
//     );
//   }

//   private loadMatches(): void {
//     this.iplService.getAllMatches().subscribe(
//       (response: any[]) => {
//         this.matches = response;
//       },
//       (error: HttpErrorResponse) => {
//         this.handleError(error);
//       }
//     );
//   }

//   vote(itemId: number): void {
    
//   }

//   bookTicket(matchId: number): void {

//   }

//   private handleError(error: HttpErrorResponse): void {
//     if (error.error instanceof ErrorEvent) {
//       this.errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       this.errorMessage = `Server-side error: ${error.status} ${error.message}`;
//       if (error.status === 400) {
//         this.errorMessage = 'Bad request. Please check your input.';
//       }
//     }
//     console.error('An error occurred:', this.errorMessage);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { IplService } from '../../services/ipl.service';
import { Team } from '../../types/Team';
import { Cricketer } from '../../types/Cricketer';
import { Match } from '../../types/Match';
import { TicketBooking } from '../../types/TicketBooking';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vote } from '../../types/Vote';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  teams: Team[] = [];
  cricketers: Cricketer[] = [];
  matches: Match[] = [];
  ticketsBooked: TicketBooking[] = [];
  voteList: Vote[];
  emailForm: FormGroup;
  role: string| null;
  userId: number; 

  constructor(private iplService: IplService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
    this.userId = Number(localStorage.getItem("user_id"));
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.loadTeams();
    this.loadCricketers();
    this.loadMatches();
    this.loadVotes();
  }

  loadTeams(): void {
    this.iplService.getAllTeams().subscribe((teams) => {
      this.teams = teams;
    });
  }

  loadCricketers(): void {
    this.iplService.getAllCricketers().subscribe((cricketers) => {
      this.cricketers = cricketers;
    });
  }

  loadMatches(): void {
    this.iplService.getAllMatches().subscribe((matches) => {
      this.matches = matches;
    });
  }

  loadVotes(): void {
    this.iplService.getAllVotes().subscribe((votes) => {
      this.voteList = votes;
    });
  }

  loadTicketsBooked(): void {
    const email = this.emailForm.get('email')?.value;
    this.iplService.getBookingsByUserEmail(email).subscribe((ticketsBooked) => {
      this.ticketsBooked = ticketsBooked;
    });
  }

  onSubmitEmail(): void {
    if (this.emailForm.valid) {
      this.loadTicketsBooked();
    }
  }
}
