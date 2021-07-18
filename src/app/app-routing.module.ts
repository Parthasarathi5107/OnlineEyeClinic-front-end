import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';
import { CancelComponent } from './appointment/cancel/cancel.component';
import { RescheduleComponent } from './appointment/reschedule/reschedule.component';
import { ViewappointmentComponent } from './appointment/viewappointment/viewappointment.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
import { ViewreportComponent } from './report/viewreport/viewreport.component';
import { DoctorActivityComponent } from './doctor/doctor-activity/doctor-activity.component';
import { AddtestComponent } from './test/addtest/addtest.component';
import { AddreportComponent } from './report/addreport/addreport.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DoctorScheduleComponent } from './doctor/doctor-schedule/doctor-schedule.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { UpdatePatientComponent } from './patient/patient-details/update-patient/update-patient.component';
import { UpdateappointmentComponent } from './appointment/reschedule/updateappointment/updateappointment.component';
import { SpectaclesComponent } from './spectacles/spectacles.component';
import { AdminComponent } from './admin/admin.component';
import { DoctordetailsComponent } from './doctor/doctordetails/doctordetails.component';
import { UpdatedoctorComponent } from './doctor/doctordetails/updatedoctor/updatedoctor.component';
import { UpdatereportComponent } from './report/updatereport/updatereport.component';
import { ManagedoctorComponent } from './admin/managedoctor/managedoctor.component';
import { ManagetestComponent } from './admin/managetest/managetest.component';
import { ManagespectaclesComponent } from './admin/managespectacles/managespectacles.component';
import { AdddoctorComponent } from './doctor/adddoctor/adddoctor.component';
import { AddspectaclesComponent } from './spectacles/addspectacles/addspectacles.component';
import { UpdatespectaclesComponent } from './spectacles/updatespectacles/updatespectacles.component';
import { UpdateadminComponent } from './admin/updateadmin/updateadmin.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'appointment/:patientId',component : AppointmentComponent},
{path:'report/:patientid',component : ReportComponent},
{path:'view',component: ViewappointmentComponent},
{path:'contact',component: ContactComponent},

{path:'book',component: BookappointmentComponent},
{path:'cancel',component: CancelComponent},
{path:'reschedule',component: RescheduleComponent},


{path:'test',component: TestComponent},
{path:'viewreport',component:  ViewreportComponent}, 
{path:'docActivity',component: DoctorActivityComponent},
{path:'createtest',component: AddtestComponent},
{path:'report/:patientId',component: AddreportComponent},
{path:'login',component:LoginComponent},
{path:'patient/:id',component: PatientComponent},
{path:'doctor/:id',component: DoctorComponent},
{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'forget-password',component: ForgotPasswordComponent},
{path:'schedule',component: DoctorScheduleComponent},
{path:'patient/:patientId/details',component: PatientDetailsComponent},
{path:'patient/:patientId/details/update',component: UpdatePatientComponent},

{path:'patient/:patientId',component: TestComponent},
{path:'appointment/:appointmentId/details',component: RescheduleComponent},
{path:'appointment/:appointmentId/details/update',component: UpdateappointmentComponent},
{path:'appointment/:patientId',component: BookappointmentComponent},
{path:'report/:patientId',component: ReportComponent},
{path:'spectacles',component: SpectaclesComponent},
{path:'admin/:adminId',component: AdminComponent},
{path:'doctor/:doctorId/details',component: DoctordetailsComponent},
{path:'doctor/:doctorId/details/update',component: UpdatedoctorComponent},
{path:'appointment/:doctorId/view',component: ViewappointmentComponent},
{path:'report/:reportId/details',component: UpdatereportComponent},

{path:'managedoctor',component: ManagedoctorComponent},
{path:'test/manage',component: ManagetestComponent},
{path:'spectacles/manage',component: ManagespectaclesComponent},
{path:'adddoctor',component: AdddoctorComponent},
{path:'viewAlldoctor',component: DoctorScheduleComponent},
{path:'spectacles/add',component: AddspectaclesComponent},
{path:'spectacles/viewAll',component: SpectaclesComponent},
{path:'spectacles/update',component: UpdatespectaclesComponent},
{path:'spectacles/delete',component: SpectaclesComponent},
{path:'admin/:adminId/update',component: UpdateadminComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
