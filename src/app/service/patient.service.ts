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
  private updatePatient_endpoint = this.baseUrl+'/update';
  private viewAllPatients_endpoint = this.baseUrl+'/viewAll';
  private viewById_endpoint = this.baseUrl+'/view';
  private viewByNameAndEmail_endpoint = this.baseUrl+'/viewByName';
  

  constructor(private http: HttpClient) { }

  getPatientList(): Observable<any>
  {
    return this.http.get(`${this.viewAllPatients_endpoint}`);
  }

  addPatient(patient: Patient): Observable<any>
  {
    patient.role='patient';
    return this.http.post(`${this.addPatient_endpoint}`, patient);
  }

  getPatient(id: number): Observable<any>
  {
    return this.http.get(`${this.viewById_endpoint}/${id}`);
  }

  updatePatient(patient:Patient): Observable<any>
  {

    return this.http.put(`${this.updatePatient_endpoint}`, patient);
  }
  
  getPatientByUsernameAndEmail(patientName: string, patientEmail: string): Observable<any>
  {
    return this.http.get(`${this.viewByNameAndEmail_endpoint}/${patientName}/${patientEmail}`);
  }
  
}
