export class Notification {
  id: number;
  receivedAt: string;
  body: string;

  constructor(rawNotif:any) {
    this.id = rawNotif.id;
    this.receivedAt = rawNotif.receivedAt;
    this.body = rawNotif.body;
  }
}
