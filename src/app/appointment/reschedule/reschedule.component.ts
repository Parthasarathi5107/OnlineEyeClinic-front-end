import { AppointmentResponse } from './../../response/appointment-response';
import { PatientService } from './../../service/patient.service';
import { Patient } from 'src/app/details/patient';
import { AppointmentService } from 'src/app/service/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/details/appointment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientResponse } from 'src/app/response/patient-response';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {

  registerForm: FormGroup;

  appointmentId: FormControl;

  constructor(private route: ActivatedRoute,private router: Router,private appointmentService:AppointmentService,private patientService:PatientService) { }

  // appointmentId: number;
  appointment: AppointmentResponse;
  patientId: number;
  patient:PatientResponse;
  formSubmitted = false;

  ngOnInit(): void {

    this.appointmentId = new FormControl('', [Validators.required]);
    this.registerForm = new FormGroup(
      {
        'appointmentId': this.appointmentId,
        
      }
    );

    this.route.paramMap.subscribe(params =>
      {
        this.patientId = +params.get("patientId");
      });

    this.patientService.getPatient(this.patientId).subscribe(data =>
      {
        console.log(data);
        this.patient = data;
        console.log(this.patient)
      }, error => console.log(error));


  }

  backToPortal()
  {
    this.router.navigate(['appointment',this.patientId]);
  }

  onSubmit()
  {
    
      this.viewAppointment();
    
  }

  viewAppointment()
  {
    this.appointmentService.viewById(this.appointmentId.value)
    .subscribe(data => {
      console.log(data)
      this.appointment=data;
    },
    error => console.log(error));
    this.formSubmitted = true;
   
  }

  goUpdate()
  {
    this.router.navigate(['appointment',this.patientId,'details','update']);
  }

  cancel()
  {
    this.appointmentService.cancelAppointment(this.appointmentId.value).subscribe(data=>{
     
      this.appointment = data;
      alert("Appointment has been cancelled")
      console.log(this.appointment);
  },
  err=>
  {
    console.log(err.error);
  }
  
  ); 
 
  }

}




  
  

