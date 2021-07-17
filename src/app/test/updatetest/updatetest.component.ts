import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Test } from 'src/app/details/test';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-updatetest',
  templateUrl: './updatetest.component.html',
  styleUrls: ['./updatetest.component.css']
})
export class UpdatetestComponent implements OnInit {

  registerForm: FormGroup;

    testId:FormControl;
    testName :FormControl;
    testType :FormControl;
    testDescription :FormControl;
    testCost :FormControl;
    patient :FormControl;

  formSubmitted = false;

  constructor(private testService:TestService , private router: Router) { }

  namePattern="[A-Z][a-z]+[ ]?[a-zA-Z]+";

  ngOnInit(): void {
    this.testId = new FormControl('', [Validators.required]);
    this.testName = new FormControl('', [Validators.required,Validators.pattern(this.namePattern)]);
    this.testType = new FormControl('', [Validators.required, Validators.minLength(3),Validators.max(20)]);
    this.testDescription = new FormControl('', [Validators.required]);
    this.testCost = new FormControl('', [Validators.required, Validators.min(500)]);
    this.patient = new FormControl('', [Validators.required]);
    

    this.registerForm = new FormGroup(
      {
        'testId': this.testId,
        'testName': this.testName,
        'testType': this.testType,
        'testDescription': this.testDescription,
        'testCost': this.testCost,
        'patient': this.patient,
        
      }
    );
  }

  onSubmit()
  {

      this.updateTest(this.registerForm.value);

  }

  updateTest(test: Test)
  {
    this.testService.updateTest(test)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

}
