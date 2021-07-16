import { PatientService } from './../service/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../details/patient';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  namePattern='[A-Z][a-z]+[ ]?[a-zA-Z]+';
  mobilePattern='^$|[0-9]{10}';

  // roles = ['customer','vendor'];

  registerForm: FormGroup;

  userName: FormControl;
  patientAge: FormControl;
  patientMobile: FormControl;
  patientEmail: FormControl;
  patientDOB: FormControl;
  address: FormControl;
  password: FormControl;

  formSubmitted = false;

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {

    this.userName = new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
    this.patientAge = new FormControl('', Validators.required);
    this.patientMobile = new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]);
    this.patientEmail = new FormControl('', [Validators.required, Validators.email]);
    this.patientDOB = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.registerForm = new FormGroup(
      {
        'password': this.password,
        'userName': this.userName,
        'patientAge': this.patientAge,
        'patientMobile': this.patientMobile,
        'patientEmail': this.patientEmail,
        'patientDOB': this.patientDOB,
        'address': this.address,
      }
    );
  }

  onSubmit()
  {
    
      this.addPatient(this.registerForm.value);
    
  }

  addPatient(patient: Patient)
  {
    this.patientService.addPatient(patient)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }


}
