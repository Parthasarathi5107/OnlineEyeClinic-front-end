
import { User } from './../details/user';
import { PatientService } from './../service/patient.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  user: User={"userId": 0, "userName":"", "password":"", "role":""};
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: LoginService) { }

  ngOnInit(): void {
  }

  // Check user for authenticatoin
  // checkLogin() {
  //   if(this.loginservice.authenticate(this.username, this.password)) {
  //     this.loginservice.getRole(this.username).subscribe((data:User => {
  //       this.user = data;
  //       this.redirect();
  //     });
  //   }
  //   else {
  //     console.log("Invalid Login Credentials..");
  //     this.invalidLogin = true;
  //   }
  // }

  // // Redirect based on the user role
  // redirect() {
  //   if(this.user.role === 'Patient') {
  //     sessionStorage.setItem('role', 'patient');
  //     sessionStorage.setItem('userId', String(this.user.userId));
  //     this.invalidLogin = false;
  //     this.router.navigate(["/userpanel"]).then(()=> {
  //       window.location.reload();
  //     });
  //   }
  //   else if(this.user.role === 'ROLE_ADMIN') {
  //     sessionStorage.setItem('role', 'admin');
  //     sessionStorage.setItem('userId', String(this.user.userId));
  //     this.invalidLogin = false;
  //     this.router.navigate(["adminpanel"]).then(()=> {
  //       window.location.reload();
  //     });
  //   }
  // }
}
