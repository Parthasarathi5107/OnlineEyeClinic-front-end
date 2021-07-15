
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  private baseUrl='http://localhost:9999/admin';

  addAdmin(admin: object): Observable<Object>{
    return this.http.post(`${this.baseUrl}/add`, admin);
  }

  updateAdmin(admin: object): Observable<Object>{
    return this.http.put(`${this.baseUrl}/updateUser/`, admin);
  }
}
