
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
<<<<<<< HEAD
import { ViewreportComponent } from './report/viewreport/viewreport.component';
import { AddreportComponent } from './report/addreport/addreport.component';
import { UpdatereportComponent } from './report/updatereport/updatereport.component';
=======
import { AddreportComponent } from './report/addreport/addreport.component';
import { ViewreportComponent } from './report/viewreport/viewreport.component';
import { UpdatereportComponent } from './report/updatereport/updatereport.component';
import { TestlinkComponent } from './test/testlink/testlink.component';
import { ReportlinkComponent } from './report/reportlink/reportlink.component';
>>>>>>> 8cfc62933f4af4e72796b7da7f234b850bae7306



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
  {path:'report',component: ReportComponent},
  {path:'test',component: TestComponent},
  {path:'viewreport',component:  ViewreportComponent},
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
    RescheduleComponent,
<<<<<<< HEAD
    ViewreportComponent,
    AddreportComponent,
    UpdatereportComponent
=======
    AddreportComponent,
    ViewreportComponent,
    UpdatereportComponent,
    TestlinkComponent,
    ReportlinkComponent
>>>>>>> 8cfc62933f4af4e72796b7da7f234b850bae7306
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
