import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Report{
  activities: string,
  bathroom: string,
  date: string,
  firstname: string,
  health: string,
  lastname: string,
  meals: string,
  mood: string,
  note: string
   }

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 private baseURL = "https://educare.ghanablog.net/php/mobile/"

 data: any;

  constructor(private httpClient: HttpClient) {   }

  getRequest(url: string): Observable<any>{
      return this.httpClient.get(this.baseURL+url);
  }


  setData(report: Report){
    this.data = {
    activities: report.activities,
    bathroom: report.bathroom,
    date: report.date,
    firstname: report.firstname,
    health: report.health,
    lastname: report.lastname,
    meals: report.meals,
    mood: report.mood,
    note: report.note
     }
     
  }

}
