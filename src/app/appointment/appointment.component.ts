import { ActivatedRoute, RouterModule } from '@angular/router';
import { Appointment } from './../details/appointment';

import { AppointmentService } from './../service/appointment.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService:AppointmentService,private router: RouterModule,private route:ActivatedRoute){
    this.getAllAppointments;
  }

  appointment:Appointment=new Appointment();
  appointments !:Appointment[];

  ngOnInit(): void {
    this.appointment.patient.userId = this.route.snapshot.params['id'];
    this.appointment.doctor.userId = this.route.snapshot.params['id'];
    this.appointment.appointmentDate=this.route.snapshot.params['date'];
    this.appointment.appointmentTime=this.route.snapshot.params['time'];
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

onSubmit()
{
    this.appointmentService.bookAppointment(this.appointment).subscribe(data=>{
    console.log(data);
    alert("Appointment has created successfully"); 
  },
  error=>console.log(error));
}

goBack()
{
  this.route.url;
}

}
