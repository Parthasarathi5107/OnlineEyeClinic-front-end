import { AppointmentService } from 'src/app/service/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/details/appointment';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private appointmentService:AppointmentService) { }

  appointmentId: number;
  appointment: Appointment;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.appointmentId = +params.get("id");
        console.log(this.appointmentId)
      });

    this.appointmentService.viewById(this.appointmentId).subscribe(data =>
      {
        console.log(data);
        this.appointment = data;
      }, error => console.log(error));
  }

  backToPortal()
  {
    this.router.navigate(['appointment',this.appointmentId]);
  }

  goUpdate()
  {
    this.router.navigate(['appointment',this.appointmentId,'details','update']);
  }

}




  
  

