<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { User } from './../details/user';
>>>>>>> 9abd8d51e55fad7c40e295cdf9ef0f78662acb0d
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9999/users';
<<<<<<< HEAD
  private viewUserById_endpoint = this.baseUrl+'/view/{userId}';
  private viewUsers_endpoint = this.baseUrl+'/viewAll';

  viewUserById(id:number):Observable<any>{
    return this.http.get(`${this.viewUserById_endpoint}/${id}`);
    }
    
  viewUser():Observable<any>{
    return this.http.get(`${this.viewUsers_endpoint}`);
    }

=======
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
>>>>>>> 9abd8d51e55fad7c40e295cdf9ef0f78662acb0d
}
