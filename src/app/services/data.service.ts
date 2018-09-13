import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getData(route): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${route}`, httpOptions);
  }

  postData(route, data): Observable<any> {
    return this.http.post<any>(`${this.url}/${route}`, data, httpOptions);
  }

  updateData(route, id, data): Observable<any> {
    return this.http.patch<any>(`${this.url}/${route}/${id}`, data, httpOptions);
  }

  destroyData(route): Observable<any> {
    return this.http.delete<any>(`${this.url}/${route}`, httpOptions);
  }
}
