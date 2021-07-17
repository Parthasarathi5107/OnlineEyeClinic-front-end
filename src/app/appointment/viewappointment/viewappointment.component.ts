import { Appointment } from './../../details/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {
<<<<<<< HEAD

  constructor(private appointmentService:AppointmentService) {
    this.getAllAppointments;
   }

  appointments !:Appointment[];
=======
 
  constructor() { }
>>>>>>> 58bbcc002b5edbce110e81beb905bf142f43aed2

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
