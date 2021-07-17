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

  allReport: Report[] = [];
  currentPatienttests: Report[] = [];
  patientId: number;
  reportDetails: Report[];

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(params =>
  //           {
  //             this.patientId = +params.get("id");
  //             console.log(this.patientId);
  //           });
          
      
  //         this.patientService.getPatient(this.patientId).subscribe(data =>{
            
  //         });
  // }

  // onClick()
  // {
  //   this.router.navigate(['report',this.patientId]);
  // }

  // getDetails(pId: number)
  // {
  //   this.reportDetails = [];
  //   for (var i=0; i<this.currentPatienttests.length; i++)
  //   {
  //     if (this.currentPatienttests[i].reportId == pId)
  //     {
  //       this.reportService.viewReportByPatientId(pId).subscribe(data =>{
  //         this.reportDetails = data;
  //       });
  //     }
  //   }

  // }

  ngOnInit(): void {
    
    console.log(this.allReport)
    this.reportService.viewReportByPatientId(2).subscribe(data =>{
      console.log(data);
      this.allReport = data;
    });
  }
 
}



 
  
  
  

  

  
  