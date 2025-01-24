import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Team } from '../../types/Team';

@Component({
  selector: 'app-teamcreate',
  templateUrl: './teamcreate.component.html',
  styleUrls: ['./teamcreate.component.scss']
})

export class TeamCreateComponent implements OnInit {
  teamForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  constructor(private formBuilder: FormBuilder) {}
    ngOnInit(): void{
      this.teamForm = this.formBuilder.group({
        teamId: [null, [Validators.required,Validators.minLength(1)]],
        teamName: ['', [Validators.required,Validators.minLength(2)]],
        location: ['', [Validators.required]],
        ownerName: ['', [Validators.required,Validators.minLength(2)]],
        establishmentYear: [null, [Validators.required]]
      })
    }


  onSubmit():void {
    if (this.teamForm.valid) {
      this.successMessage = 'Team has been successfully created!';
      this.errorMessage = null;
      console.log('Team created: ', this.teamForm.value);
      this.resetForm();
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

 resetForm():void {
    this.teamForm.reset({
      teamId: null,
      teamName: '',
      location: '',
      ownerName: '',
      establishmentYear: new Date().getFullYear()
    });
  }
}
