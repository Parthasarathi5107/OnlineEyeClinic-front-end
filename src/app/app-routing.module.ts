import { DeletespectaclesComponent } from './spectacles/deletespectacles/deletespectacles.component';
import { HomeComponent } from './home/home.component';
import { VideoconsultationComponent } from './videoconsultation/videoconsultation.component';

import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { BookappointmentComponent } from './appointment/bookappointment/bookappointment.component';
import { RescheduleComponent } from './appointment/reschedule/reschedule.component';
import { ViewappointmentComponent } from './appointment/viewappointment/viewappointment.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
import { ViewreportComponent } from './report/viewreport/viewreport.component';
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
import { UpdatetestComponent } from './test/updatetest/updatetest.component';
import { DoctorAppointmentComponent } from './doctor/doctor-appointment/doctor-appointment.component';
import { ViewtestComponent } from './test/viewtest/viewtest.component';
import { DoctorCreatetestComponent } from './doctor/doctor-createtest/doctor-createtest.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{path:'appointment/:patientId',component : AppointmentComponent},
{path:'report/:patientid',component : ReportComponent},
{path:'appointment/:patientId/view',component: ViewappointmentComponent},
{path:'doctorAppointment/:doctorId/view',component: DoctorAppointmentComponent},
{path:'contact',component: ContactComponent},
/* appointment routes */
{path:'appointment/:patientId/book',component: BookappointmentComponent},
{path:'appointment/:patientId/reschedule',component: RescheduleComponent},


{path:'test/:patientId',component: TestComponent},

{path:'viewReport/:patientId',component:  ViewreportComponent}, 

{path:'createtest',component: AddtestComponent},
{path:'doctorReport/:doctorId',component: AddreportComponent},
{path:'login',component:LoginComponent},
{path:'patient/:patientId',component: PatientComponent},
{path:'doctor/:doctorId',component: DoctorComponent},
{path:'login',component: LoginComponent},
{path:'register',component: RegisterComponent},
{path:'forget-password',component: ForgotPasswordComponent},
{path:'schedule',component: DoctorScheduleComponent},
{path:'patient/:patientId/details',component: PatientDetailsComponent},
{path:'patient/:patientId/details/update',component: UpdatePatientComponent},

{path:'patient/:patientId',component: TestComponent},
{path:'appointment/:appointmentId/details',component: RescheduleComponent},
{path:'appointment/:appointmentId/details/update',component: UpdateappointmentComponent},
// {path:'appointment/:patientId',component: BookappointmentComponent},
{path:'report/:patientId',component: ReportComponent},
{path:'spectacles',component: SpectaclesComponent},
{path:'admin/:adminId',component: AdminComponent},
{path:'doctor/:doctorId/details',component: DoctordetailsComponent},
{path:'doctor/:doctorId/details/update',component: UpdatedoctorComponent},
{path:'appointment/:doctorId/view',component: ViewappointmentComponent},
{path:'report/:reportId/details',component: UpdatereportComponent},

{path:'managedoctor',component: ManagedoctorComponent},
{path:'manageTest',component: ManagetestComponent},
{path:'spectacles/manage',component: ManagespectaclesComponent},
{path:'adddoctor',component: AdddoctorComponent},
{path:'viewAlldoctor',component: DoctorScheduleComponent},
{path:'spectacles/add',component: AddspectaclesComponent},
{path:'spectacles/viewAll',component: SpectaclesComponent},
{path:'spectacles/update',component: UpdatespectaclesComponent},
{path:'spectacles/delete',component: DeletespectaclesComponent},

{path:'admin/:adminId/update',component: UpdateadminComponent},

{path:'createTest',component: AddtestComponent},
{path:'updateTest',component: UpdatetestComponent},
{path:'deleteTest',component: ManagetestComponent},
{path:'viewTest',component: ViewtestComponent},
{path:'view',component: VideoconsultationComponent},
{path:'home',component: HomeComponent},
{path:'doctorTest/:doctorId',component: DoctorCreatetestComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
