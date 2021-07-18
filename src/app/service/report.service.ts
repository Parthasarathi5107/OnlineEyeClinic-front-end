import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../details/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9999/report';
  private addReport_endpoint = this.baseUrl+'/add';
  private updateReport_endpoint = this.baseUrl+'/update';
  private deleteReport_endpoint = this.baseUrl+'/delete';
  private viewReportById_endpoint = this.baseUrl+'/view';
  private viewByDate_endpoint = this.baseUrl+'/viewByDate';
  private viewSpectacles_endpoint = this.baseUrl+'/spectacles';

  addReport(report: Report): Observable<any>
    {
      return this.http.post(`${this.addReport_endpoint}`, report);
    }

  updateReport(report:Report): Observable<any>
  {
    return this.http.put(`${this.updateReport_endpoint}`, report);
  }

  deleteReport(id:number):Observable<any>{
    return this.http.delete(`${this.deleteReport_endpoint}/${id}`, { responseType: 'text' });
  }

  viewReportById(rid:number,pid:number):Observable<any>{
    return this.http.get(`${this.viewReportById_endpoint}/${rid}/${pid}`);
  }

  viewReportByDate(date:Date):Observable<any>{
    return this.http.get(`${this.viewByDate_endpoint}/${date}`);
  }

  viewSpectacles():Observable<any>{
    return this.http.get(`${this.viewSpectacles_endpoint}`);
  }
}
