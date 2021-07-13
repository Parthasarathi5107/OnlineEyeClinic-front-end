import { Appointment } from './../details/appointment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }

  private address = 'http://localhost:9999/appointment';

  private getAllAppointment_endpoint = this.address+'/viewAll';
  private bookAppointment_endpoint = this.address+'/book';

  getAllAppointments():Observable<Appointment[]>
  {
    return this.http.get<Appointment[]>(`${this.getAllAppointment_endpoint}`);
  }

  bookAppointment(appointment:Appointment):Observable<Appointment>
  {
    return this.http.post<Appointment>(`${this.bookAppointment_endpoint}`,appointment);
  }
  
}
