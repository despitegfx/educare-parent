import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 private baseURL = "https://educare.ghanablog.net/php/mobile/"

  constructor(private httpClient: HttpClient) {   }

  getRequest(url: string): Observable<any>{
      return this.httpClient.get(this.baseURL+url);
  }
}
