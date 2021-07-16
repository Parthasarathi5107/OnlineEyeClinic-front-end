import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
