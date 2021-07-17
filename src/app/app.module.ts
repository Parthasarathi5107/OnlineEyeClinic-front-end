
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { ReportComponent } from './report/report.component';
import { TestComponent } from './test/test.component';
import { SpectaclesComponent } from './spectacles/spectacles.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './appointment/link/link.component';
import { ViewappointmentComponent } from './appointment/viewappointment/viewappointment.component';
import { ContactComponent } from './contact/contact.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';
import { CancelComponent } from './appointment/cancel/cancel.component';
import { RescheduleComponent } from './appointment/reschedule/reschedule.component';
import { AddreportComponent } from './report/addreport/addreport.component';
import { ViewreportComponent } from './report/viewreport/viewreport.component';
import { UpdatereportComponent } from './report/updatereport/updatereport.component';
import { TestlinkComponent } from './test/testlink/testlink.component';
import { ReportlinkComponent } from './report/reportlink/reportlink.component';
import { LoginComponent } from './login/login.component';
import { DoctorActivityComponent } from './doctor-activity/doctor-activity.component';
import { AddtestComponent } from './test/addtest/addtest.component';
import { UpdatetestComponent } from './test/updatetest/updatetest.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { UpdatePatientComponent } from './patient/patient-details/update-patient/update-patient.component';
import { DoctordetailsComponent } from './doctor/doctordetails/doctordetails.component';
import { UpdatedoctorComponent } from './doctor/doctordetails/updatedoctor/updatedoctor.component';
import { LogoutComponent } from './logout/logout.component';
import { AddspectaclesComponent } from './spectacles/addspectacles/addspectacles.component';
import { UpdatespectaclesComponent } from './spectacles/updatespectacles/updatespectacles.component';





const appRoutes:Routes=[

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'appointment/:id',component : AppointmentComponent},
  {path:'report',component : ReportComponent},
  {path:'view',component: ViewappointmentComponent},
  {path:'contact',component: ContactComponent},
  
  {path:'book',component: BookappointmentComponent},
  {path:'cancel',component: CancelComponent},
  {path:'reschedule',component: RescheduleComponent},
  
  {path:'test',component: TestComponent},
  {path:'viewreport',component:  ViewreportComponent}, 
  {path:'docActivity',component: DoctorActivityComponent},
  {path:'createtest',component: AddtestComponent},
  {path:'addreport',component: AddreportComponent},

  {path:'patient/:id',component: PatientComponent},
  {path:'doctor/:id',component: DoctorComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'forget-password',component: ForgotPasswordComponent},
  {path:'patient/:patientId/details',component: PatientDetailsComponent},
  {path:'patient/:patientId/details/update',component: UpdatePatientComponent},
  {path:'report/:patientId',component: ReportComponent},
  {path:'spectacles',component: SpectaclesComponent},
  {path:'admin',component: AdminComponent},
  {path:'doctor/:doctorId/details',component: DoctordetailsComponent},
  {path:'doctor/:doctorId/details/update',component: UpdatedoctorComponent},
  {path:'appointment/:doctorId/view',component: ViewappointmentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppointmentComponent,
    DoctorComponent,
    PatientComponent,
    ReportComponent,
    TestComponent,
    SpectaclesComponent,
    UserComponent,
    HeaderComponent,
    LinkComponent,
    ViewappointmentComponent,
    ContactComponent,
    BookappointmentComponent,
    CancelComponent,
    RescheduleComponent,
    AddreportComponent,
    ViewreportComponent,
    UpdatereportComponent,
    TestlinkComponent,
    ReportlinkComponent,
    LoginComponent,
    DoctorActivityComponent,
    AddtestComponent,
    UpdatetestComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PatientDetailsComponent,
    UpdatePatientComponent,
    DoctordetailsComponent,
    UpdatedoctorComponent,
    LogoutComponent,
    AddspectaclesComponent,
    UpdatespectaclesComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
