import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../details/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:9999/doctor';
  private addDoctor_endpoint = this.baseUrl+'/add';
  private viewAllDoctors_endpoint = this.baseUrl+'/viewAll';
  private viewById_endpoint = this.baseUrl+'/view';

  constructor(private http: HttpClient) { }

  getDoctorList(): Observable<any>
  {
    return this.http.get(`${this.viewAllDoctors_endpoint}`);
  }

  addDoctor(doctor: Doctor): Observable<any>
  {
    return this.http.post(`${this.addDoctor_endpoint}`, doctor);
  }

  getDoctor(id: number): Observable<any>
  {
    return this.http.get(`${this.viewById_endpoint}/${id}`);
  }

  updateDoctor(id: number, value: any): Observable<any>
  {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
}
