import { Patient } from 'src/app/details/patient';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  patientId: number;
  patient: Patient;

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
