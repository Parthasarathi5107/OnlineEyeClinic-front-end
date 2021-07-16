import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/details/patient';
import { PatientService } from 'src/app/service/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  patientId: number;
  patient: Patient;

  constructor(private route: ActivatedRoute, private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.patientId = +params.get("id");
      });

    this.patientService.getPatient(this.patientId).subscribe(data =>
      {
        console.log(data);
        this.patient = data;
        
      }, error => console.log(error));
  }

  update()
  {
    this.patient.userId=this.patientId;
        this.patient.role='patient';
    this.patientService.updatePatient(this.patient).subscribe(data =>{

      console.log(data);
      this.patient = data;
    });
    this.back();
  }

  back()
  {
    this.router.navigate(['patient',this.patientId,'details']);
  }
}
