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
    this.route.paramMap.subscribe(params =>
            {
              this.patientId = +params.get("id");
              console.log(this.patientId);
            });
          
          this.reloadData();
      
          this.patientService.getPatient(this.patientId).subscribe(data =>{
            
          });
  }
  reloadData()
  {
    this.currentPatienttests = [];
    this.testService.viewTest().subscribe(data =>
      {
        this.allTests = data;
        this.allTests.forEach(test => {
          if (test.patient.userId == this.patientId)
            this.currentPatienttests.push(test);
        });
      });
  }

  onClick()
  {
    this.router.navigate(['patient',this.patientId]);
  }

  
  getDetails(testId: number)
  {
    this.testDetails = [];
    for (var i=0; i<this.currentPatienttests.length; i++)
    {
      if (this.currentPatienttests[i].testId == testId)
      {
        this.testService.viewTestById(testId).subscribe(data =>{
          this.testDetails = data;
        });
      }
    }

  }

}
