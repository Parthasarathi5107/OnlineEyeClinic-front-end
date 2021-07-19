import { DoctorResponse } from './../../../response/doctor-response';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/details/doctor';
import { DoctorService } from 'src/app/service/doctor.service';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrls: ['./updatedoctor.component.css']
})
export class UpdatedoctorComponent implements OnInit {

  registerForm: FormGroup;

  // userId: FormControl;
  userName: FormControl;
  doctorConsultationTime: FormControl;
  doctorMobile: FormControl;
  doctorEmail: FormControl;
  address: FormControl;
  password: FormControl;

  
   

  doctorId: number;
  doctor : DoctorResponse;

  namePattern='[A-Z][a-z]+[ ]?[a-zA-Z]+';
  mobilePattern='^$|[0-9]{10}';

  formSubmitted = false;

  constructor(private doctorService: DoctorService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.userId = new FormControl('', [Validators.required]);
    this.userName = new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]);
    this.doctorConsultationTime = new FormControl('', Validators.required);
    this.doctorMobile = new FormControl('', [Validators.required, Validators.pattern(this.mobilePattern)]);
    this.doctorEmail = new FormControl('', [Validators.required, Validators.email]);
    this.address = new FormControl('', Validators.required);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);

    this.registerForm = new FormGroup(
      {
        // 'userId': this.userId,
        'password': this.password,
        'userName': this.userName,
        'doctorConsultationTime': this.doctorConsultationTime,
        'doctorMobile': this.doctorMobile,
        'doctorEmail': this.doctorEmail,
        'address': this.address,
      }
    );

    this.route.paramMap.subscribe(params =>
      {
        this.doctorId = +params.get("doctorId");
        console.log(this.doctorId)
      });

    this.doctorService.getDoctor(this.doctorId).subscribe(data =>
      {
        console.log(data);
        this.doctor = data;
      }, error => console.log(error));
  }

  onSubmit()
  {
    
      this.updateDoctor(this.registerForm.value);
    console.log(this.registerForm.value);
  }

  updateDoctor(doctor : Doctor)
  {
    doctor.userId=this.doctorId;
    console.log(doctor);
    this.doctorService.updateDoctor(doctor)
    .subscribe(data => {
      console.log(data)
    },
    error => console.log(error));

    this.formSubmitted = true;
  }

}
