import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Cricketer } from '../../types/Cricketer';
import { IplService } from "../../services/ipl.service";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-cricketercreate',
  templateUrl: './cricketercreate.component.html',
  styleUrls: ['./cricketercreate.component.scss']
})
export class CricketerCreateComponent implements OnInit {
  cricketerForm!: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  cricketer!: Cricketer;

  constructor(private fb: FormBuilder, private iplService: IplService) {}

  ngOnInit(): void {
    this.cricketerForm = this.fb.group({
      cricketerId: [null, Validators.required],
      teamId: [null, Validators.required],
      cricketerName: ['', [Validators.required, this.usernameValidator()]],
      age: [null, [Validators.required, Validators.min(18)]],
      nationality: ['', Validators.required],
      experience: [null, [Validators.required, Validators.min(0)]],
      role: ['', Validators.required],
      totalRuns: [null, Validators.min(0)],
      totalWickets: [null, Validators.min(0)]
    });
  }

  usernameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const username = control.value;
      if (!username) {
        return null;
      }
      const hasSpecialChar = /[^a-zA-Z0-9]/.test(username);
      if (hasSpecialChar) {
        return { 'usernameInvalid': true };
      }
      return null;
    };
  }

  onSubmit(): void {
    if (this.cricketerForm.valid) {
      this.addCricketer();
    } else {
      this.errorMessage = 'Please fill out all required fields correctly.';
      this.successMessage = null;
    }
  }

  private addCricketer(): void {
    this.iplService.addCricketer(this.cricketerForm.value).subscribe(
      (response: Cricketer) => {
        this.cricketer = response;
        this.successMessage = 'Cricketer created successfully!';
        this.errorMessage = null;
        this.resetForm();
      },
      (error: HttpErrorResponse) => {
        this.handleError(error);
      }
    );
  }

  resetForm(): void {
    this.cricketerForm.reset();
  }

  private handleError(error: HttpErrorResponse): void {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      this.errorMessage = `Server-side error: ${error.status} ${error.message}`;
      if (error.status === 400) {
        this.errorMessage = 'Bad request. Please check your input.';
      }
    }
    console.error('An error occurred:', this.errorMessage);
  }
}
