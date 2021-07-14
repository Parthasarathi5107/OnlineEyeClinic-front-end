import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewappointmentComponent } from './appointment/viewappointment/viewappointment.component';

const routes: Routes = [{path:'view',component: ViewappointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
