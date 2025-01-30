import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TicketBooking } from "../../types/TicketBooking";

@Component({
    selector: 'app-ticketbooking',
    templateUrl: './ticketbooking.component.html',
    styleUrls: ['./ticketbooking.component.scss'] 
  })

export class TicketBookingComponent implements OnInit {
    ticketBookingForm!:FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;
    ticketBooking:TicketBooking |null = null;

    constructor(private fb:FormBuilder){}

    ngOnInit(): void {
        this.ticketBookingForm=this.fb.group({
            bookingId:[null,[Validators.required]],
            email:['',[Validators.required]],
            matchId:[null,[Validators.required]],
            numberOfTickets:[null ,[Validators.required,Validators.min(1)]]
        })
    }

    onSubmit():void{
        if(this.ticketBookingForm.valid){
            this.ticketBooking = this.ticketBookingForm.value
            this.successMessage = 'Tickets Booked successfully!';
            this.errorMessage = null;
            console.log(this.ticketBooking);
        } else {
        this.errorMessage = 'Please fill out all required fields correctly.';
        this.successMessage = null;
        }
    }


    resetForm():void{
        this.ticketBookingForm.reset();
    }
  
  

}