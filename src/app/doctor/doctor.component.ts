import { DoctorService } from './../service/doctor.service';
import { Doctor } from './../details/doctor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private doctorService : DoctorService) { }

  ngOnInit(): void {
  }

  doctor !:Doctor[];


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
