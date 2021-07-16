import { UserService } from './../service/user.service';
import { Admin } from './../details/admin';
import { Doctor } from './../details/doctor';
import { Patient } from './../details/patient';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../service/patient.service';
import { DoctorService } from '../service/doctor.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  roles = ['patient', 'doctor'];
  patients:Patient[] = [];
  doctors: Doctor[] = [];
  admins: Admin[]=[];
  currentPatient: Patient=null;
  currentDoctor: Doctor = null;
  loginForm: FormGroup;

  userId: FormControl;
  userName: FormControl;
  password: FormControl;
  role: FormControl;

  showErrorMessage = false;

  constructor(private userService: UserService, private router: Router, private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.userId = new FormControl('', Validators.required);
    this.userName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.role = new FormControl('patient');
    this.loginForm = new FormGroup(
      {
        'userId': this.userId,
        'userName': this.userName,
        'password': this.password,
        'role': this.role,
      }
    );
  }

  // onSubmit()
  // {
  //   if (this.role.value == "patient")
  //     this.patientLogin();
  //   else
  //     this.doctorLogin();
  // } 

  // patientLogin()
  // {
  //   this.patientService.getLogin().subscribe(data => 
  //     {
  //       this.patients = data;

  //       this.patients.forEach(patient => 
  //         {console.log(patient)
  //           if (patient.userName == this.loginForm.get('username').value)
  //           { console.log("inside if");
  //             if (patient.password == this.loginForm.get('password').value){
  //               this.currentPatient = patient;
  //               console.log("inside double if");}
  //           }
  //         });

  //       if (this.currentPatient == null){
  //         this.showErrorMessage = true;
  //         console.log("invalid credentials");}
  //       else{
  //         this.router.navigate(['patient',this.currentPatient.userId]);
  //         console.log("Login successful");}
        
  //     });

  //   this.showErrorMessage = false;
  // }

  // doctorLogin()
  // {
  //   this.doctorService.getDoctorList().subscribe(data => 
  //     {
  //       this.doctors = data;

  //       this.doctors.forEach(doctor => 
  //         {
  //           if (doctor.userName == this.loginForm.get('username').value)
  //           {
  //             if (doctor.password == this.loginForm.get('password').value)
  //               this.currentDoctor = doctor;
  //           }
  //         });

  //       if (this.currentDoctor == null)
  //         this.showErrorMessage = true;
  //       else
  //         this.router.navigate(['vendor',this.currentDoctor.userId]);
        
  //     });

  //   this.showErrorMessage = false;
  // }

  
  onSubmit()
  {
    if (this.role.value == "patient"){
      this.patientLogin(this.loginForm.value);
      console.log(this.loginForm.value);}
    else
      this.doctorLogin(this.loginForm.value);
  } 

  doctorLogin(doctor: Doctor)
  {
    this.userService.getLogin(doctor)
    .subscribe(data => {
      console.log("success");
      this.currentDoctor=doctor;
      this.router.navigate(['doctor',this.currentDoctor.userId]);
    },
    error => console.log(error));

    console.log(this.loginForm.value)
    console.log("failed")
  }

  patientLogin(patient: Patient)
  {
    this.userService.getLogin(patient)
    .subscribe(data => {
      console.log("success");
      this.currentPatient=patient;
      this.router.navigate(['patient',this.currentPatient.userId]);
    },
    error => console.log(error));

    console.log(this.loginForm.value)
    console.log("failed")
  }
  
}
