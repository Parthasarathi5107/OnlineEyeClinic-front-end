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
  private updateAppointment_endpoint = this.address+'/update';
  private cancelAppointment_endpoint = this.address+'/cancel/{appointmentId}';
  private viewById_endpoint = this.address+'/view/{appointmentId}';
  private viewByDate_endpoint = this.address+'/viewByDate/{date}';
  private viewByDateAndName_endpoint = this.address+'//viewByName/{date}/{doctorName}';

  getAllAppointments():Observable<any>
  {
    return this.http.get(`${this.getAllAppointment_endpoint}`);
  }

  bookAppointment(appointment: Appointment): Observable<any>{
    return this.http.post(`${this.bookAppointment_endpoint}`, appointment);
  }

  updateAppointment(appointment:Appointment): Observable<any>{
    return this.http.put(`${this.updateAppointment_endpoint}`, appointment);
  }

  cancelAppointment(id:number):Observable<any>{
    return this.http.delete(`${this.cancelAppointment_endpoint}/${id}`, { responseType: 'text' });
  }
  
  viewById(id:number):Observable<any>{
    return this.http.get(`${this.viewById_endpoint}/${id}`);
  }

  viewByDate(date:Date):Observable<any>{
    return this.http.get(`${this.viewByDate_endpoint}/${date}`);
  }

  viewByDateAndName(date:Date,doctorName : string):Observable<any>{
    return this.http.get(`${this.viewByDateAndName_endpoint}/${date}/${doctorName}`);
  }
  
}
