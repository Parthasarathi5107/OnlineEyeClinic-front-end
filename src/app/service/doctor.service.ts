import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../details/doctor';
import { Test } from '../details/test';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:9999/doctor';
  private addDoctor_endpoint = this.baseUrl+'/add';
  private viewAllDoctors_endpoint = this.baseUrl+'/viewAll';
  private viewById_endpoint = this.baseUrl+'/view/{doctorId}';
  private deleteDoc_endpoint = this.baseUrl+'/delete/{doctorId}';
  private viewByDateAndName_endpoint = this.baseUrl+'/viewAppointments/{date}/{doctorName}';
  private addTest_endpoint = this.baseUrl+'/test';
  private viewDoctorByName_endpoint = this.baseUrl+'/viewByName/{doctorName}';

  constructor(private http: HttpClient) { }

  getDoctorList(): Observable<any>
  {
    return this.http.get(`${this.viewAllDoctors_endpoint}`);
  }

  addDoctor(doctor: Doctor): Observable<any>
  {
    doctor.role='doctor';
    return this.http.post(`${this.addDoctor_endpoint}`, doctor);
  }

  getDoctor(id: number): Observable<any>
  {
    return this.http.get(`${this.viewById_endpoint}/${id}`);
  }

  updateDoctor(doctor:Doctor): Observable<any>
  
  {
    return this.http.put(`${this.baseUrl}`,doctor);
  }

  deleteDoctor(id:number):Observable<any>
  {
    return this.http.delete(`${this. deleteDoc_endpoint}/${id}`, { responseType: 'text' });
  }

  viewByDateAndName(date:Date,doctorName : string):Observable<any>{
    return this.http.get(`${this.viewByDateAndName_endpoint}/${date}/${doctorName}`);
  }

  addTest(test: Test): Observable<any>
  {
    return this.http.post(`${this.addTest_endpoint}`, test);
  }

  viewDoctorByName(name:string):Observable<any>{
    return this.http.get(`${this.viewDoctorByName_endpoint}/${name}`);
  }
}
