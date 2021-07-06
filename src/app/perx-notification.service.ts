import { Injectable } from '@angular/core';
import { INotification } from './notification';
import { Notification } from './notification';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PerxNotificationService {
  private notificationsUrl = '/notifications';

  constructor(private http: HttpClient) { }

  getNotifications(): Observable<INotification[]>  {
    return this.http.get<INotification[]>('http://localhost:3000' + this.notificationsUrl);
  }
}
