import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientResponse } from '../response/patient-response';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

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
  }


