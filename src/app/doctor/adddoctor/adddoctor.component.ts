import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/details/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {

  namePattern='[A-Z][a-z]+[ ]?[a-zA-Z]+';
  mobilePattern='^$|[0-9]{10}';

  // roles = ['customer','vendor'];

  registerForm: FormGroup;
 
  userName: FormControl;
  doctorConsultationTime: FormControl;
  doctorMobile: FormControl;
  doctorEmail: FormControl;
  address: FormControl;
  password: FormControl;

  formSubmitted = false;


  constructor(private router: Router,private doctorService:DoctorService) { }

  ngOnInit(): void {

    this.userName = new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
    this.doctorConsultationTime = new FormControl('', Validators.required);
    this.doctorMobile = new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]);
    this.doctorEmail = new FormControl('', [Validators.required, Validators.email]);
    this.address = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.registerForm = new FormGroup(
      {
        'password': this.password,
        'userName': this.userName,
        'doctorConsultationTime': this.doctorConsultationTime,
        'doctorMobile': this.doctorMobile,
        'doctorEmail': this.doctorEmail,
        'address': this.address,
      }
    );
  }

  onSubmit()
  {
    
      this.addDoctor(this.registerForm.value);
    
  }

  addDoctor(doctor: Doctor)
  {
    this.doctorService.addDoctor(doctor)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

}
