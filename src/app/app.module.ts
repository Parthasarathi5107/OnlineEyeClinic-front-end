
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
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './appointment/link/link.component';
import { ViewappointmentComponent } from './appointment/viewappointment/viewappointment.component';
import { ContactComponent } from './contact/contact.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';
import { CancelComponent } from './appointment/cancel/cancel.component';
import { RescheduleComponent } from './appointment/reschedule/reschedule.component';



const appRoutes:Routes=[

  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'appointment',component : AppointmentComponent},
  {path:'report',component : ReportComponent},
  {path:'view',component: ViewappointmentComponent},
  {path:'contact',component: ContactComponent},
  {path:'spec',component: SpectaclesComponent},
  {path:'book',component: BookappointmentComponent},
  {path:'cancel',component: CancelComponent},
  {path:'reschedule',component: RescheduleComponent},
  {path:'report',component: ReportComponent}
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
    FooterComponent,
    LinkComponent,
    ViewappointmentComponent,
    ContactComponent,
    BookappointmentComponent,
    CancelComponent,
    RescheduleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
