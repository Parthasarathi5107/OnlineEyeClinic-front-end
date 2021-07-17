<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from './../../service/doctor.service';
import { Doctor } from './../../details/doctor';
=======
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit {

<<<<<<< HEAD
  constructor(private doctorService : DoctorService,private route: ActivatedRoute, private router: Router) {
    
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
  
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 70a03947fe1d56d333771e51e9bda5e65e24607a
  }

}
