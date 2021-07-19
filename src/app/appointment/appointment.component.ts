import { PatientResponse } from './../response/patient-response';
import { PatientService } from './../service/patient.service';
import { Patient } from 'src/app/details/patient';
import { ActivatedRoute, Router} from '@angular/router';
import { Appointment } from './../details/appointment';

import { AppointmentService } from './../service/appointment.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  patientId: number;
  patient: PatientResponse;

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { }

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

    
    
    }

    goDetails()
  {
    console.log(this.patientId)
    this.router.navigate(['appointment',this.patientId]);
  }

      
  

}
