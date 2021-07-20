import { Patient } from 'src/app/details/patient';
import { DoctorService } from 'src/app/service/doctor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Report } from './../../details/report';
import { ReportService } from './../../service/report.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorResponse } from 'src/app/response/doctor-response';
import { Test } from 'src/app/details/test';
import { TestResponse } from 'src/app/response/test-response';

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
      visualAcuityNear :FormControl;
      visualAcuityDistance :FormControl;
      typeOfTest :FormControl;
      patient :FormControl;

  formSubmitted = false;

  doctorId: number;
  doctor: DoctorResponse;

  testObj : Test;
  patientObj : Patient;
  reportObj : Report;


  constructor(private reportService: ReportService, private router: Router,private route: ActivatedRoute,private doctorService: DoctorService) { }

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

    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("doctorId");
      });

    this.doctorService.getDoctor(this.doctorId).subscribe( data=>
      {
        console.log(data);
        this.doctor = data;
        console.log(this.doctor)
      }, error => console.log(error));
  }
  

  onSubmit()
  {
    
    var test = new Test(this.registerForm.get('typeOfTest').value,'','','',0,null);
    this.testObj = test;
    var pat = new Patient(this.registerForm.get('patient').value,'','','',0,0,'',null,'');
    this.patientObj = pat;
    var rep = new Report(0,this.registerForm.get('dateOfReport').value,this.registerForm.get('descriptionOfReport').value,
                           this.registerForm.get('visualAcuity').value,this.registerForm.get('visualAcuityNear').value,
                             this.registerForm.get('visualAcuityDistance').value,this.testObj,this.patientObj);
    this.reportObj=rep;
    this.addReport(this.reportObj);
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

