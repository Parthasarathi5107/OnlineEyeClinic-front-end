
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../details/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9999/test';
  private addTest_endpoint = this.baseUrl+'/add';
  private updateTest_endpoint = this.baseUrl+'/update';
  private deleteTest_endpoint = this.baseUrl+'/delete/{testId}';
  private viewTestById_endpoint = this.baseUrl+'/view/{testId}';
  private viewTest_endpoint = this.baseUrl+'/viewAll';

  addTest(test: Test): Observable<any>
{
  return this.http.post(`${this.addTest_endpoint}`, test);
}

updateTest(test: Test): Observable<any>
{
return this.http.put(`${this.updateTest_endpoint}`, test);

}

deleteTest(id:number):Observable<any>{
return this.http.delete(`${this.deleteTest_endpoint}/${id}`, { responseType: 'text' });
}

viewTestById(id:number):Observable<any>{
return this.http.get(`${this.viewTestById_endpoint}/${id}`);
}

viewTest():Observable<any>{
return this.http.get(`${this.viewTest_endpoint}`);
}

}


