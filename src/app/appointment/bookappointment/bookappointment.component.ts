import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  registerForm: FormGroup;

  appointmentDate :FormControl;
	appointmentTime :FormControl;
	doctor :FormControl;
	patient :FormControl;
  formSubmitted = false;

  ngOnInit(): void {

    this.appointmentDate = new FormControl('', Validators.required);
    this.appointmentTime = new FormControl('', Validators.required);
    this.doctor = new FormControl('', Validators.required);
    this.patient = new FormControl('', Validators.required);
  
    this.registerForm = new FormGroup(
      {
        'appointmentDate': this.appointmentDate,
        'appointmentTime': this.appointmentTime,
        'doctor': this.doctor,
        'patient': this.patient
      }
    );
  }

  appointment:Appointment=new Appointment();
  patientId: number;

  onSubmit()
  {
    
      this.addAppointment(this.registerForm.value);
    
  }
  
  addAppointment(appointment: Appointment)
  {
    this.appointmentService.bookAppointment(appointment)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));
  
    this.formSubmitted = true;
  }

back()
{
  this.router.navigate(['appointment',this.patientId]);
}

}









