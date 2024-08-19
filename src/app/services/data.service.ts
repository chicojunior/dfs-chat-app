import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAssistants(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/assistants');
  }

  getTopics(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/topics');
  }
}
