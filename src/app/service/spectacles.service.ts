import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Spectacles } from '../details/spectacles';

@Injectable({
  providedIn: 'root'
})
export class SpectaclesService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:9999/spectacles';
  private addSpectacles_endpoint = this.baseUrl+'/add';
  private updateSpectacles_endpoint = this.baseUrl+'/update';
  private deleteSpectacles_endpoint = this.baseUrl+'/delete';
  private viewSpectaclesById_endpoint = this.baseUrl+'/view';
  private viewSpectacles_endpoint = this.baseUrl+'/viewAll';
  private viewByRating_endpoint = this.baseUrl+'/rating';
  private viewSpectaclesByModel_endpoint = this.baseUrl+'/viewByModel';
  private viewByCost_endpoint = this.baseUrl+'/viewByCost';
  private viewByCostHigh_endpoint = this.baseUrl+'/viewByCost/h';
  private viewByCostlow_endpoint = this.baseUrl+'/viewByCost/l';

  addSpectacles(spec: Spectacles): Observable<any>{
        return this.http.post(`${this.addSpectacles_endpoint}`, spec);
      }

  updateSpectacles(spec: Spectacles): Observable<any>{
    return this.http.put(`${this.updateSpectacles_endpoint}`, spec);
  }

  deleteSpectacles(id:number):Observable<any>{
    return this.http.delete(`${this.deleteSpectacles_endpoint}/${id}`, { responseType: 'text' });
  }

  viewById(id:number):Observable<any>{
    return this.http.get(`${this.viewSpectaclesById_endpoint}/${id}`);
  }

  viewSpectacles():Observable<Spectacles[]>
    {  console.log("in service");
      return this.http.get<Spectacles[]>(`${this.viewSpectacles_endpoint}`);
     
      
    }

  viewByRating(rating:number):Observable<any>{
    return this.http.get(`${this.viewByRating_endpoint}/${rating}`);
  }

  viewSpectaclesByModel(model:string):Observable<any>{
    return this.http.get(`${this.viewSpectaclesByModel_endpoint}/${model}`);
  }

  viewByCost(r1:number,r2:number):Observable<any>{
    return this.http.get(`${this.viewByCost_endpoint}/${r1}/${r2}`);
  }

  viewByCostHigh():Observable<any>{
    return this.http.get(`${this.viewByCostHigh_endpoint}`);
  }

  viewByCostLow():Observable<any>{
    return this.http.get(`${this.viewByCostlow_endpoint}`);
  }

}
