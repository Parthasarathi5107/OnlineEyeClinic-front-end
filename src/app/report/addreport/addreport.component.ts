import { Report } from './../../details/report';
import { ReportService } from './../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrls: ['./addreport.component.css']
})
export class AddreportComponent implements OnInit {

  constructor(private router: Router,private route:ActivatedRoute,private reportService:ReportService) { }

  patientId: number;
  report:Report;

  ngOnInit(): void {

    this.route.paramMap.subscribe(params =>
      {
        this.patientId = +params.get("id");
        console.log(this.patientId)
      });
  
   }

   onSubmit()
{
  this.reportService.addReport(this.report).subscribe(data=>{
  console.log(data);
},
error=>console.log(error));

}

back()
{
this.router.navigate(['report',this.patientId]);
}

}



