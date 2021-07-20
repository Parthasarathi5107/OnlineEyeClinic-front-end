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

 
  appointmentObj:Appointment;
  doctorObj:Doctor;
  patientObj:Patient;

  
  constructor(private appointmentService:AppointmentService,private router: Router,private route:ActivatedRoute,private patientService:PatientService,private doctorService:DoctorService) { }

  registerForm: FormGroup;

  appointmentId : FormControl;
  appointmentDate :FormControl;
	appointmentTime :FormControl;
	doctor :FormControl;
  formSubmitted = false;

  
  patientId: number;
  patientResponse: PatientResponse;


  ngOnInit(): void {

    this.appointmentId = new FormControl('', Validators.required);
    this.appointmentDate = new FormControl('', Validators.required);
    this.appointmentTime = new FormControl('', Validators.required);
    this.doctor = new FormControl('', Validators.required);
  
  
    

    this.registerForm = new FormGroup(
      {
        'appointmentId':this.appointmentId,
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
    var app = new Appointment(this.registerForm.get('appointmentId').value,this.registerForm.get('appointmentDate').value,this.registerForm.get('appointmentTime').value,this.doctorObj,'',this.patientObj);
    this.appointmentObj=app;
    console.log(this.appointmentObj);
      this.updateAppointment(this.appointmentObj);
     
    
  }
  updateAppointment(appointment: Appointment)
  {
   
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





