import { User } from './../details/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9999/users';
  private ViewAll_endpoint = this.baseUrl+'/viewAll';
  private Login_endpoint = this.baseUrl+'/signin';

  getUsersList(): Observable<any>
  {
    return this.http.get(`${this.ViewAll_endpoint}`);
  }
  getLogin(user:User): Observable<any>
  {
    return this.http.post(`${this.Login_endpoint}`,user);
  }
}
