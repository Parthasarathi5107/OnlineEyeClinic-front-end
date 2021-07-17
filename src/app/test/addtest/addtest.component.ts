import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Test } from './../../details/test';
import { TestService } from './../../service/test.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addtest',
  templateUrl: './addtest.component.html',
  styleUrls: ['./addtest.component.css']
})
export class AddtestComponent implements OnInit {

  registerForm: FormGroup;

    testName :FormControl;
    testType :FormControl;
    testDescription :FormControl;
    testCost :FormControl;
    patient :FormControl;

  formSubmitted = false;

  constructor(private testService:TestService , private router: Router) { }

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