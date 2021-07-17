import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  registerForm: FormGroup;

      dateOfReport :FormControl;
      descriptionOfReport :FormControl;
      visualAcuity :FormControl;
      visualAcuityNear !:FormControl;
      visualAcuityDistance :FormControl;
      typeOfTest !:FormControl;
      patient :FormControl;

  formSubmitted = false;

  constructor(private reportService: ReportService, private router: Router) { }

  ngOnInit(): void {

    this.dateOfReport = new FormControl('', [Validators.required]);
    this.descriptionOfReport = new FormControl('', [Validators.required]);
    this.visualAcuity = new FormControl('', [Validators.required]);
    this.visualAcuityNear = new FormControl('', [Validators.required]);
    this.visualAcuityDistance = new FormControl('', [Validators.required]);
    this.typeOfTest = new FormControl('', [Validators.required]);
    this.patient = new FormControl('', [Validators.required]);
    

    this.registerForm = new FormGroup(
      {
        'dateOfReport': this.dateOfReport,
        'descriptionOfReport': this.descriptionOfReport,
        'visualAcuity': this.visualAcuity,
        'visualAcuityNear': this.visualAcuityNear,
        'visualAcuityDistance': this.visualAcuityDistance,
        'typeOfTest': this.typeOfTest,
        'patient': this.patient,
        
      }
    );
  }

  onSubmit()
  {
    
      this.addReport(this.registerForm.value);
    
  }

  addReport(report: Report)
  {
    this.reportService.addReport(report)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }


}

