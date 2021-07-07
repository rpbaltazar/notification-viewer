import { Injectable } from '@angular/core';
import { throwError, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})
export class PerxNotificationService {
  private notificationsUrl = '/notifications';

  constructor(private http: HttpClient) { }

  getNotifications() {
    return this.http.get('http://localhost:4000/api' + this.notificationsUrl)
  }
}
