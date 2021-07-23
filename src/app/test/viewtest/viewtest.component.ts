import { ActivatedRoute, Router } from '@angular/router';
import { TestResponse } from './../../response/test-response';
import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.css']
})
export class ViewtestComponent implements OnInit {

  constructor(private testService : TestService) {
    
  }

 test:TestResponse[]=[];

ngOnInit(): void {
 console.log(this.test)
 this.testService.viewTest().subscribe(data =>{
   console.log(data);
   this.test = data;
 });
}

}
