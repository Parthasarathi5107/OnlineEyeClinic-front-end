import { DoctorService } from 'src/app/service/doctor.service';
import { TestService } from 'src/app/service/test.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Test } from 'src/app/details/test';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorResponse } from 'src/app/response/doctor-response';

@Component({
  selector: 'app-doctor-createtest',
  templateUrl: './doctor-createtest.component.html',
  styleUrls: ['./doctor-createtest.component.css']
})
export class DoctorCreatetestComponent implements OnInit {

  registerForm: FormGroup;

    testName :FormControl;
    testType :FormControl;
    testDescription :FormControl;
    testCost :FormControl;
    patient :FormControl;

  formSubmitted = false;

  doctorId: number;
  doctor: DoctorResponse;

  constructor(private testService:TestService , private router: Router,private route: ActivatedRoute,private doctorService: DoctorService) { }

  namePattern="[A-Z][a-z]+[ ]?[a-zA-Z]+";

  ngOnInit(): void {
    this.testName = new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]);
    this.testType = new FormControl('', [Validators.required, Validators.minLength(3),Validators.max(20)]);
    this.testDescription = new FormControl('', [Validators.required]);
    this.testCost = new FormControl('', [Validators.required, Validators.min(500)]);
    this.patient = new FormControl('', [Validators.required]);
    

    this.registerForm = new FormGroup(
      {
        'testName': this.testName,
        'testType': this.testType,
        'testDescription': this.testDescription,
        'testCost': this.testCost,
        'patient': this.patient,
        
      }
    );

    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("doctorId");
      });

    this.doctorService.getDoctor(this.doctorId).subscribe( data=>
      {
        console.log(data);
        this.doctor = data;
        console.log(this.doctor)
      }, error => console.log(error));
  }

  onSubmit()
  {
    
      this.addTest(this.registerForm.value);
    
  }

  addTest(test: Test)
  {
    this.testService.addTest(test)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }


}
