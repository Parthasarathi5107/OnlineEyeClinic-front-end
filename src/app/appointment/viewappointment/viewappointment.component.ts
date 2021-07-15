import { Appointment } from './../../details/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) {
    this.getAllAppointments;
   }

  appointments !:Appointment[];

  ngOnInit(): void {
  }


  getAllAppointments()
  {
   this.appointmentService.getAppointmentList().subscribe(data=>{
       this.appointments = data;
   },
   err=>
   {
     console.log(err.error);
   }
   
   ); 
  
  }
}
