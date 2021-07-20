import { ReportResponse } from './../../response/report-response';
import { PatientResponse } from './../../response/patient-response';
import { ReportService } from './../../service/report.service';
import { PatientService } from 'src/app/service/patient.service';
import { Report } from './../../details/report';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewreport',
  templateUrl: './viewreport.component.html',
  styleUrls: ['./viewreport.component.css']
})
export class ViewreportComponent implements OnInit {

  constructor(private reportService:ReportService,private route: ActivatedRoute, private router: Router,private patientService:PatientService) { }

  allReport: ReportResponse[];
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

      this.getReport();
  }
 
  getReport()
  {
   this.reportService.viewReportByPatientId(this.patientId).subscribe(data=>{
       this.allReport = data;
   },
   err=>
   {
     console.log(err.error);
   }
   
   ); 
  
  }
}



 
  
  
  

  

  
  