import { Test } from './../details/test';
import { Admin } from './../details/admin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private baseUrl='http://localhost:9999/admin';
  private addAdmin_endpoint = this.baseUrl+'/add';
  private updateAdmin_endpoint = this.baseUrl+'/update';
  private deleteAdmin_endpoint = this.baseUrl+'/delete/{adminId}';

  addAdmin(admin: Admin): Observable<any>{
    return this.http.post(`${this.addAdmin_endpoint}`, admin);
  }

  updateAdmin(admin:Admin): Observable<any>{
    return this.http.put(`${this.updateAdmin_endpoint}`, admin);
  }

  deleteAdmin(id:number):Observable<any>{
    return this.http.delete(`${this.deleteAdmin_endpoint}/${id}`, { responseType: 'text' });
  }
  
}
