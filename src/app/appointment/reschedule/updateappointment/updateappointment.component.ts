import { AppointmentService } from 'src/app/service/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/details/appointment';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})
export class UpdateappointmentComponent implements OnInit {

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

  update()
{
  this.appointment.appointmentId=this.appointmentId;
  this.appointmentService.updateAppointment(this.appointment).subscribe(data =>{

    console.log(data);
    this.appointment = data;
  });
  this.back();
}

back()
{
  this.router.navigate(['appointment',this.appointmentId,'details']);
}

}





