import { PatientResponse } from './../../response/patient-response';
import { PatientService } from './../../service/patient.service';
import { Patient } from 'src/app/details/patient';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-testlink',
  templateUrl: './testlink.component.html',
  styleUrls: ['./testlink.component.css']
})
export class TestlinkComponent implements OnInit {
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
