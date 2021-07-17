import { Report } from './../../details/report';
import { ReportService } from './../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updatereport',
  templateUrl: './updatereport.component.html',
  styleUrls: ['./updatereport.component.css']
})
export class UpdatereportComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router,private reportService:ReportService) { }
  reportId: number;
  report: Report;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params =>
      {
        this.reportId = +params.get("id");
      });

    this.reportService.viewReportByPatientId(this.reportId).subscribe(data =>
      {
        console.log(data);
        this.report = data;
      }, error => console.log(error));

  }

  update()
  {
    this.reportService.updateReport(this.report).subscribe(data =>{

      console.log(data);
      this.report = data;
    });
    this.back();
  }

  back()
  {
    this.router.navigate(['report',this.reportId,'details']);
  }

}
  
  

  