import { DoctorService } from './../../service/doctor.service';
import { Doctor } from './../../details/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {

  constructor(private doctorService : DoctorService) { }
 doctor !:Doctor[];

  ngOnInit(): void {
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

}
