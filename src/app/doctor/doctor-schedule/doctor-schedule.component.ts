import { DoctorResponse } from './../../response/doctor-response';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from './../../service/doctor.service';
import { Doctor } from './../../details/doctor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/details/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {

  constructor(private doctorService : DoctorService,private route: ActivatedRoute, private router: Router) {
    
<<<<<<< HEAD
  }
doctor:Doctor[] = [];

ngOnInit(): void {
 console.log(this.doctor)
 this.doctorService.getDoctorList().subscribe(data =>{
   console.log(data);
   this.doctor = data;
 });
}

 getAllDoctors()
 {
  this.doctorService.getDoctorList().subscribe(data=>{
      this.doctor = data;
  },
  err=>
  {
    console.log(err.error);
  }
  
  ); 
 
 }
=======
   }
 doctor:DoctorResponse[]=[];

 ngOnInit(): void {
  console.log(this.doctor)
  this.doctorService.getDoctorList().subscribe(data =>{
    console.log(data);
    this.doctor = data;
  });
}

  // getAllDoctors()
  // {
  //  this.doctorService.getDoctorList().subscribe(data=>{
  //      this.doctor = data;
  //  },
  //  err=>
  //  {
  //    console.log(err.error);
  //  }
   
  //  ); 
  
  // }
>>>>>>> b37d529eb71586b355ea9234ca4bef945061d569

}
