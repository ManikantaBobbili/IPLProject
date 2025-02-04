import { Component, OnInit } from "@angular/core";
import { IplService } from "../../services/ipl.service";
import { Router } from "@angular/router";
import { Team } from "../../types/Team";
import { Cricketer } from "../../types/Cricketer";
import { Match } from "../../types/Match";

@Component({
    selector: 'app-dashboard',
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
    teams:Team[];
    cricketers:Cricketer[];
    matches:Match[];
    userRole:string ='';

    constructor(private iplService:IplService, private router:Router){}
    ngOnInit(): void {
        this.getTeams();
        this.getCricketers();
        this.getMatches();
    }


    getTeams(){
        this.iplService.getAllTeams().subscribe((res:Team[])=>this.teams = res);
    }


    getCricketers(){
        this.iplService.getAllCricketers().subscribe((ckts:Cricketer[])=>this.cricketers = ckts);
    }

    getMatches(){
        this.iplService.getAllMatches().subscribe((matchs:Match[])=>this.matches = matchs);
    }
    

 

}
