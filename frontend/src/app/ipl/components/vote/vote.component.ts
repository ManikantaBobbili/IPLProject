import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Vote } from "../../types/Vote";

@Component({
    selector: 'app-vote',
    templateUrl: './vote.component.html',
    styleUrls: ['./vote.component.scss'] 
  })

export class VoteComponent implements OnInit {
    voteForm!:FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;
    vote:Vote |null = null;

    constructor(private fb:FormBuilder){}
    ngOnInit(): void {
        this.voteForm=this.fb.group({
            voteId:[null,[Validators.required]],
            email:['',[Validators.required]],
            category:['',[Validators.required]],
            cricketerId:[null ,[Validators.required]],
            teamId:[null,[Validators.required]]
        })
    }

    onSubmit():void{
        if(this.voteForm.valid){
            this.vote = this.voteForm.value;
            this.successMessage = 'Vote created successfully!';
            this.errorMessage = null;
            console.log('Vote Created: ', this.voteForm.value);
        } else {
        this.errorMessage = 'Please fill out all required fields correctly.';
        this.successMessage = null;
        }
    }


    resetForm():void{
        this.voteForm.reset();
    }
  
  

}

