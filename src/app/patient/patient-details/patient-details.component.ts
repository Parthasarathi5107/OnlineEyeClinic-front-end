import { User } from './../../details/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/details/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patientId: number;
  patient: Patient;

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.patientId = +params.get("id");
        console.log(this.patientId)
      });

    this.patientService.getPatient(this.patientId).subscribe(data =>
      {
        console.log(data);
        this.patient = data;
      }, error => console.log(error));
  }

  backToPortal()
  {
    this.router.navigate(['patient',this.patientId]);
  }

  goUpdate()
  {
    this.router.navigate(['patient',this.patientId,'details','update']);
  }
}
