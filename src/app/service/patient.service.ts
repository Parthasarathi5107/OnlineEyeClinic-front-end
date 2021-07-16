import { User } from './../details/user';
import { Patient } from './../details/patient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:9999/patient';
  private addPatient_endpoint = this.baseUrl+'/add';
  private viewAllPatients_endpoint = this.baseUrl+'/viewAll';
  private patientLogin_endpoint = 'http://localhost:9999/users/viewAll';
  private Login_endpoint = 'http://localhost:9999/users/signin';
  private viewById_endpoint = this.baseUrl+'/view';
  

  constructor(private http: HttpClient) { }

  getPatientList(): Observable<any>
  {
    return this.http.get(`${this.viewAllPatients_endpoint}`);
  }

  addPatient(patient: Patient): Observable<any>
  {
    return this.http.post(`${this.addPatient_endpoint}`, patient);
  }

  getPatient(id: number): Observable<any>
  {
    return this.http.get(`${this.viewById_endpoint}/${id}`);
  }

  updatePatient(id: number, value: any): Observable<any>
  {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getUsersList(): Observable<any>
  {
    return this.http.get(`${this.patientLogin_endpoint}`);
  }
  getLogin(user:User): Observable<any>
  {
    return this.http.post(`${this.Login_endpoint}`,user);
  }
}
