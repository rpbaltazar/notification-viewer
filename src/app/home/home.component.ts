import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';
import { PerxNotificationService } from '../perx-notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recentNotifications: Notification[] = []
  selectedNotification?: Notification;

  constructor(private perxNotificationService: PerxNotificationService) {}

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(): void {
    this.perxNotificationService.getNotifications()
        .subscribe((data:any) => {
          this.recentNotifications = data.data.map((notif:Notification) => new Notification(notif));
        });
  }

  onSelect(notification: Notification): void {
    this.selectedNotification = notification;
  }
}
