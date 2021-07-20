import { UserService } from './../service/user.service';
import { Admin } from './../details/admin';
import { Doctor } from './../details/doctor';
import { Patient } from './../details/patient';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../service/doctor.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  roles = ['patient', 'doctor','admin'];
  patients:Patient[] = [];
  doctors: Doctor[] = [];
  admins: Admin[]=[];
  currentPatient: Patient=null;
  currentDoctor: Doctor = null;
  currentAdmin: Admin = null;
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

  onSubmit()
  {
    if (this.role.value == "patient")
      this.patientLogin();
    else if(this.role.value=="doctor")
      this.doctorLogin();
    else
    this.adminLogin();
  } 

  patientLogin()
  {
    this.userService.getUsersList().subscribe(data => 
      { 
                this.patients = data;

        this.patients.forEach(patient => 
          {
            if(patient.role=='patient'){
            if (patient.userName == this.loginForm.get('userName').value)
            { 
              if (patient.password == this.loginForm.get('password').value){
                this.currentPatient = patient;
                }
            }
          }
          });

        if (this.currentPatient == null){
          this.showErrorMessage = true;
          console.log("invalid credentials");}
        else{
          this.router.navigate(['patient',this.currentPatient.userId]);
          console.log("Login successful");}
        
      });

    this.showErrorMessage = false;
  }

  doctorLogin()
  {
    this.userService.getUsersList().subscribe(data => 
      {
        this.doctors = data;

        this.doctors.forEach(doctor => 
          {
          if(doctor.role=='doctor'){
            if (doctor.userName == this.loginForm.get('userName').value)
            {
              if (doctor.password == this.loginForm.get('password').value)
                this.currentDoctor = doctor;
            }
          }
          });

        if (this.currentDoctor == null)
          this.showErrorMessage = true;
        else
          this.router.navigate(['doctor',this.currentDoctor.userId]);
        
      });

    this.showErrorMessage = false;
  }

  adminLogin()
  {
    this.userService.getUsersList().subscribe(data => 
      {
        this.admins = data;

        this.admins.forEach(admin => 
          {
          if(admin.role=='admin'){
            
            if (admin.userName == this.loginForm.get('userName').value)
            {
              if (admin.password == this.loginForm.get('password').value)
                this.currentAdmin = admin;
            }
          }
          });

        if (this.currentAdmin == null)
          this.showErrorMessage = true;
        else
          this.router.navigate(['admin',this.currentAdmin.userId]);
        
      });

    this.showErrorMessage = false;
  
}

}
  
//   onSubmit()
//   {
//     if (this.role.value == "patient"){
//       this.patientLogin(this.loginForm.value);
//       console.log(this.loginForm.value);}
//     else
//       this.doctorLogin(this.loginForm.value);
//   } 

//   doctorLogin(doctor: Doctor)
//   {
//     this.userService.getLogin(doctor)
//     .subscribe(data => {
//       console.log("success");
//       this.currentDoctor=doctor;
//       this.router.navigate(['doctor',this.currentDoctor.userId]);
//     },
//     error => console.log(error));

//     console.log(this.loginForm.value)
//     console.log("failed")
//   }

//   patientLogin(patient: Patient)
//   {
//     this.userService.getLogin(patient)
//     .subscribe(data => {
//       console.log("success");
//       this.currentPatient=patient;
//       this.router.navigate(['patient',this.currentPatient.userId]);
//     },
//     error => console.log(error));

//     console.log(this.loginForm.value)
//     console.log("failed")
//   }
  
// }

