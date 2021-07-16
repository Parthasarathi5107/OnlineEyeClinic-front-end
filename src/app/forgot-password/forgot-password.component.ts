import { DoctorService } from '../service/doctor.service';
import { PatientService } from '../service/patient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  roles = ['patient', 'doctor'];
  role: string;
  userName: string;
  email: string;
  user: any;
  userExist = false;
  showErrorMessage = false;

  constructor(private patientService: PatientService, private doctorService: DoctorService) { }

  ngOnInit(): void {

    this.role = "patient";
  }

  onSubmit()
  {
    // if (this.role == "patient")
    // {
    //   this.patientService.getPatientByUsernameAndEmail(this.userName, this.email).subscribe(data =>{
    //     this.user = data;
    //     this.userExist = true;
    //   },erorr =>{
    //     this.showErrorMessage = true;
    //   });

    alert("Password reset link has been sent to entered mail...")
    }
    // else
    // {
    //   this.doctorService.getDoctorByUsernameAndEmail(this.userName, this.email).subscribe(data =>{
    //     this.user = data;
    //     this.userExist = true;
    //   },erorr =>{
    //     this.showErrorMessage = true;
    //   });
    // }
  // }

}
