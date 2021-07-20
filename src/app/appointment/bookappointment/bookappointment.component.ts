import { Time } from '@angular/common';
import { DoctorResponse } from './../../response/doctor-response';
import { DoctorService } from 'src/app/service/doctor.service';
import { PatientResponse } from './../../response/patient-response';
import { PatientService } from './../../service/patient.service';
import { Patient } from 'src/app/details/patient';
import { Appointment } from 'src/app/details/appointment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Doctor } from 'src/app/details/doctor';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.css']
})
export class BookappointmentComponent implements OnInit {

  appointmentObj:Appointment;
  doctorObj:Doctor;
  patientObj:Patient;


  constructor(private appointmentService:AppointmentService,private router: Router,private route:ActivatedRoute,private patientService:PatientService,private doctorService:DoctorService) { }

  registerForm: FormGroup;

  appointmentDate :FormControl;
	appointmentTime :FormControl;
	doctor :FormControl;
  formSubmitted = false;

  
  patientId: number;
  patientResponse: PatientResponse;

  

  ngOnInit(): void {

    this.appointmentDate = new FormControl('', Validators.required);
    this.appointmentTime = new FormControl('', Validators.required);
    this.doctor = new FormControl('', Validators.required);
  
  
    

    this.registerForm = new FormGroup(
      {
        'appointmentDate': this.appointmentDate,
        'appointmentTime': this.appointmentTime,
        'doctor':  this.doctor,
        
      }
    );



    console.log(this.registerForm.value)
    


    this.route.paramMap.subscribe(params =>
      {
        this.patientId = +params.get("patientId");
      });

    this.patientService.getPatient(this.patientId).subscribe(data =>
      {
        console.log(data);
        this.patientResponse = data;
        console.log(this.patientResponse)
      }, error => console.log(error));

    
     
  }



  onSubmit()
  {
    
    var doc = new Doctor(this.registerForm.get('doctor').value,'','','','','','','');
    this.doctorObj = doc;
    var pat = new Patient(this.patientId,'','','',0,0,'',null,'');
    this.patientObj = pat;
    var app = new Appointment(0,this.registerForm.get('appointmentDate').value,this.registerForm.get('appointmentTime').value,this.doctorObj,'',this.patientObj);
    this.appointmentObj=app;
      this.addAppointment(this.appointmentObj);
     
    
  }
  
  addAppointment(appointment: Appointment)
  {
 
    console.log(appointment);
    
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









