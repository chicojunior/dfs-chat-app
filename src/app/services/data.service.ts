import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assistant, Topic } from '../model/chat-app.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getAssistants(): Observable<Assistant> {
    return this.http.get<Assistant>('http://localhost:3000/assistants');
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>('http://localhost:3000/topics');
  }
}
