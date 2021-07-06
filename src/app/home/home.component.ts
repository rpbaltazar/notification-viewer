import { Component, OnInit } from '@angular/core';
import { Notification } from '../notification';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recentNotifications: Notification[] = [
    {
      id: 1,
      receivedAt: "2021-07-06 10:03:10",
      rawBody: "{\"user\":{\"id\":14257,\"identifier\":\"978bd79c-4973-4016-a464-823aafae1174\",\"alternate_id\":null},\"event\":{\"name\":\"achieve_stamps_slot\",\"params\":{\"campaign_id\":831,\"number_of_stamps\":3}},\"resource\":{\"type\":\"Stamp::Transaction\",\"data\":{\"id\":16034,\"stamp_card_id\":6583,\"position_of_stamp\":3,\"state\":\"issued\",\"issued_date\":\"2021-07-06T02:39:11Z\",\"transaction_reference\":\"070601000692\",\"campaign\":{\"id\":831,\"name\":\"QR Payment Program\"}}},\"timestamp\":\"2021-07-06T02:39:11Z\"}"
    },
    {
      id: 2,
      receivedAt: "2021-07-06 10:03:10",
      rawBody: "{\"user\":{\"id\":14257,\"identifier\":\"978bd79c-4973-4016-a464-823aafae1174\",\"alternate_id\":null},\"event\":{\"name\":\"achieve_stamps_slot\",\"params\":{\"campaign_id\":831,\"number_of_stamps\":3}},\"resource\":{\"type\":\"Stamp::Transaction\",\"data\":{\"id\":16034,\"stamp_card_id\":6583,\"position_of_stamp\":3,\"state\":\"issued\",\"issued_date\":\"2021-07-06T02:39:11Z\",\"transaction_reference\":\"070601000692\",\"campaign\":{\"id\":831,\"name\":\"QR Payment Program\"}}},\"timestamp\":\"2021-07-06T02:39:11Z\"}"
    },
    {
      id: 3,
      receivedAt: "2021-07-06 10:03:10",
      rawBody: "{\"user\":{\"id\":14257,\"identifier\":\"978bd79c-4973-4016-a464-823aafae1174\",\"alternate_id\":null},\"event\":{\"name\":\"achieve_stamps_slot\",\"params\":{\"campaign_id\":831,\"number_of_stamps\":3}},\"resource\":{\"type\":\"Stamp::Transaction\",\"data\":{\"id\":16034,\"stamp_card_id\":6583,\"position_of_stamp\":3,\"state\":\"issued\",\"issued_date\":\"2021-07-06T02:39:11Z\",\"transaction_reference\":\"070601000692\",\"campaign\":{\"id\":831,\"name\":\"QR Payment Program\"}}},\"timestamp\":\"2021-07-06T02:39:11Z\"}"
    }
  ];

  selectedNotification?: Notification;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSelect(notification: Notification): void {
    this.selectedNotification = notification;
  }
}
