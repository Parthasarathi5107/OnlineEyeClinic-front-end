import { PatientResponse } from './../../../response/patient-response';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/details/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {


  registerForm: FormGroup;

  
  userName: FormControl;
  patientAge: FormControl;
  patientMobile: FormControl;
  patientEmail: FormControl;
  patientDOB: FormControl;
  address: FormControl;
  password: FormControl;

  patientId: number;
  patient: PatientResponse;
  namePattern='[A-Z][a-z]+[ ]?[a-zA-Z]+';
  mobilePattern='^$|[0-9]{10}';

  formSubmitted = false;

  constructor(private patientService: PatientService, private router: Router,private route: ActivatedRoute) { }

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

    this.route.paramMap.subscribe(params =>
      {
        this.patientId = +params.get("patientId");
        console.log(this.patientId)
      });

    this.patientService.getPatient(this.patientId).subscribe(data =>
      {
        console.log(data);
        this.patient = data;
      }, error => console.log(error));
  }

  onSubmit()
  {
    
      this.updatePatient(this.registerForm.value);
    console.log(this.registerForm.value);
  }

  updatePatient(patient: Patient)
  {
    patient.userId=this.patientId;
    console.log(patient);
    this.patientService.updatePatient(patient)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

}
