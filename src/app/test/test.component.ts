import { Test } from './../details/test';
import { PatientService } from './../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from './../service/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService:TestService,private route: ActivatedRoute, private router: Router,private patientService:PatientService) { }

  allTests: Test[] = [];
  currentPatienttests: Test[] = [];
  patientId: number;
  testDetails: Test[];
 
  
  ngOnInit(): void {
    
    console.log(this.allTests)
    this.testService.viewTest().subscribe(data =>{
      console.log(data);
      this.allTests = data;
    });
  }

}
