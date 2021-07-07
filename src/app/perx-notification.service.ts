import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerxNotificationService {
  private notificationsUrl = '/notifications';
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNotifications() {
    return this.http.get(this.API_URL + this.notificationsUrl)
  }
}
