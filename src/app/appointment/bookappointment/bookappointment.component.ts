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
  date:Date;
  time:Time;
  doctorObj:Doctor;
  patientObj:Patient;


  constructor(private appointmentService:AppointmentService,private router: Router,private route:ActivatedRoute,private patientService:PatientService,private doctorService:DoctorService) { }

  registerForm: FormGroup;

  appointmentDate :FormControl;
	appointmentTime :FormControl;
	doctor :FormControl;
	// patient :FormControl;
  formSubmitted = false;

  
  patientId: number;
  patientResponse: PatientResponse;

  /**  */
  doctorResponse:DoctorResponse;

  ngOnInit(): void {

    this.appointmentDate = new FormControl('', Validators.required);
    this.appointmentTime = new FormControl('', Validators.required);
    this.doctor = new FormControl('', Validators.required);
    // this.patient = new FormControl('', Validators.required);
  
    

    this.registerForm = new FormGroup(
      {
        'appointmentDate': this.appointmentDate,
        'appointmentTime': this.appointmentTime,
        'doctor':  this.doctor,
        // 'patient': this.patient
      }
    );



    console.log(this.registerForm.value)
    // doct:=this.doctor.value


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

  // appointment:Appointment=new Appointment();
  

  getDoctor(doctorId:number)
  {
    this.doctorService.getDoctor(doctorId).subscribe(data =>
      {
        console.log(data);
        this.doctorResponse = data;
        console.log(this.doctorResponse)
      }, error => console.log(error));


  }

  onSubmit()
  {
    this.doctorService.getDoctor(this.doctor.value).subscribe(data =>
      {
        console.log(data);
        this.doctorResponse = data;
        console.log(this.doctorResponse)
      }, error => console.log(error));
    console.log(this.doctor.value);
    // console.log(this.registerForm.value);

    this.date=this.appointmentDate.value;
    this.time=this.appointmentTime.value;
    this.doctorObj.userId=this.doctorResponse.userId;
    this.patientObj.userId=this.patientResponse.userId;
    
    this.appointmentObj.appointmentDate=this.date;
    this.appointmentObj.appointmentTime=this.time;
    this.appointmentObj.doctor=this.doctorObj;
    this.appointmentObj.patient=this.patientObj;
    // appointment:new Appointment(0,this.date,this.time,this.doctorObj,'',this.patientObj);
      this.addAppointment(this.appointmentObj);
     
      // console.log(this.registerForm.value)
    
  }
  
  addAppointment(appointment: Appointment)
  {console.log("inside add ")
  console.log(appointment);
 
    // appointment.doctor.userId=this.doctorEntityObj.userId;
    console.log(appointment);
    // console.log(appointment);
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









