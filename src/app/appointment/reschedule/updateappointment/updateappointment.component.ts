import { Patient } from 'src/app/details/patient';
import { Doctor } from 'src/app/details/doctor';
import { AppointmentService } from 'src/app/service/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/details/appointment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatientResponse } from 'src/app/response/patient-response';
import { PatientService } from 'src/app/service/patient.service';
import { DoctorService } from 'src/app/service/doctor.service';
import { DoctorResponse } from 'src/app/response/doctor-response';
import { Time } from '@angular/common';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})
export class UpdateappointmentComponent implements OnInit {

  patientId: number;
  patientResponse:PatientResponse;
  doctorResponse:DoctorResponse;

  appointmentObj:Appointment;
  date:Date;
  time:Time;
  doctorObj:Doctor;
  patientObj:Patient;
  
  registerForm: FormGroup;

    appointmentId :FormControl;
    appointmentDate :FormControl;
    appointmentTime :FormControl;
    doctor :FormControl;
    // patient :FormControl;

  formSubmitted = false;

  constructor(private appointmentService:AppointmentService,private router: Router,private route:ActivatedRoute,private patientService:PatientService,private doctorService:DoctorService) { }


  ngOnInit(): void {
    this.appointmentId = new FormControl('', [Validators.required]);
    this.appointmentDate = new FormControl('', Validators.required);
    this.appointmentTime = new FormControl('', Validators.required);
    this.doctor = new FormControl('', Validators.required);
    // this.patient = new FormControl('', Validators.required);
    

    this.registerForm = new FormGroup(
      {
        'appointmentId': this.appointmentId,
        'appointmentDate': this.appointmentDate,
        'appointmentTime': this.appointmentTime,
        'doctor':  this.doctor,
        // 'patient': this.patient
        
      }
    );

    
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
      this.updateAppointment(this.appointmentObj);

  }

  updateAppointment(appointment: Appointment)
  {
    // appointment.patient.userId=this.patientId;
    this.appointmentService.updateAppointment(appointment)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

  back()
{
  console.log(this.patientId)
  this.router.navigate(['appointment',this.patientId,'reschedule']);
}
}





