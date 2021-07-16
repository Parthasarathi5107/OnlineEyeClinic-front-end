import { Appointment } from './../../details/appointment';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  constructor(private appointmentService:AppointmentService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.appointment.patient);
    this.appointment.appointmentDate=this.route.snapshot.params['date'];
    this.appointment.appointmentTime=this.route.snapshot.params['time'];
    this.appointment.patient.userId = this.route.snapshot.params['id'];
    this.appointment.doctor.userId = this.route.snapshot.params['id'];
    
  }

  appointment:Appointment=new Appointment();


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
