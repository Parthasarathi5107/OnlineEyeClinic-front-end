import { Appointment } from './../details/appointment';

import { AppointmentService } from './../service/appointment.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService:AppointmentService){
    this.getAllAppointments;
  }
  appointments !:Appointment[];

  ngOnInit(): void {
  }

  getAllAppointments()
{
 this.appointmentService.getAllAppointments().subscribe(data=>{
     this.appointments = data;
 },
 err=>
 {
   console.log(err.error);
 }
 
 ); 

}

}
