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

  test:Test=new Test();

  constructor(private testService:TestService,private router:Router,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.test.testName=this.route.snapshot.params['text'];
    this.test.testType=this.route.snapshot.params['text'];
    this.test.testDescription=this.route.snapshot.params['text'];
    this.test.testCost=this.route.snapshot.params['number'];
    this.test.patient.userId=this.route.snapshot.params['id'];
  }

  onSubmit()
{
  //   this.testService.bookAppointment(this.appointment).subscribe(data=>{
  //   console.log(data);
  //   alert("Appointment has created successfully"); 
  // },
  // error=>console.log(error));
}



}