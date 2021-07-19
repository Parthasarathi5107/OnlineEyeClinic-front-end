import { AppointmentResponse } from './../../response/appointment-response';
import { PatientResponse } from './../../response/patient-response';
import { Patient } from 'src/app/details/patient';
import { PatientService } from './../../service/patient.service';
import { Appointment } from './../../details/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrls: ['./viewappointment.component.css']
})
export class ViewappointmentComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private appointmentService:AppointmentService,private patientService:PatientService) {
    this.getAllAppointments;
   }

   appointmentId: number;
  appointments :AppointmentResponse[];
  patientAppointments :AppointmentResponse[]=[];
  patientId: number;
  patient:PatientResponse;

 
  ngOnInit(): void {

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

      this.getAllAppointments();
      

  }


  getAllAppointments()
  {
   this.appointmentService.getAllAppointments().subscribe(data=>{
     
       this.appointments = data;
      this.appointments.forEach(element => {
        if(element.patientId ==this.patientId)
        {
          this.patientAppointments.push(element);
        }
      });
   },
   err=>
   {
     console.log(err.error);
   }
   
   ); 
  
  }
}
