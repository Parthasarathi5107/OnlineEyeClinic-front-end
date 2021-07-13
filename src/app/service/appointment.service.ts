import { Appointment } from './../details/appointment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  private address = 'http://localhost:9999';
  private createAdmin_endpoint = this.address+'appointment';
  private getAllAppointment_endpoint = this.address+'/viewAll';

  getAllAppointments():Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(`${this.getAllAppointment_endpoint}`);
  }

  
}
