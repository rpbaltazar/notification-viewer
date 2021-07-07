export class Notification {
  id: number;
  receivedAt: Date;
  body: string;

  constructor(rawNotif:any) {
    this.id = rawNotif.id;
    this.receivedAt = new Date(rawNotif.received_at);
    this.body = rawNotif.body;
  }
}
