
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

  private viewUserById_endpoint = this.baseUrl+'/view/{userId}';
  private viewUsers_endpoint = this.baseUrl+'/viewAll';

  viewUserById(id:number):Observable<any>{
    return this.http.get(`${this.viewUserById_endpoint}/${id}`);
    }
    
  viewUser():Observable<any>{
    return this.http.get(`${this.viewUsers_endpoint}`);
    }


  private ViewAll_endpoint = this.baseUrl+'/viewAll';
  private Login_endpoint = this.baseUrl+'/signin';
  private viewUserById_endpoint = this.baseUrl+'/view/{userId}';

  getUsersList(): Observable<any>
  {
    return this.http.get(`${this.ViewAll_endpoint}`);
  }
  getLogin(user:User): Observable<any>
  {
    return this.http.post(`${this.Login_endpoint}`,user);
 
  }
<<<<<<< HEAD

=======
  viewUserById(id:number):Observable<any>{
    return this.http.get(`${this.viewUserById_endpoint}/${id}`);
    }
    
  
>>>>>>> 58bbcc002b5edbce110e81beb905bf142f43aed2
}


