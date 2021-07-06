export interface INotification {
  id: number;
  receivedAt: string; //date
  body: string;
}

export class Notification implements INotification {
  id: number;
  receivedAt: string;
  body: string;

  constructor(rawNotif: INotification) {
    this.id = rawNotif.id;
    this.receivedAt = rawNotif.receivedAt;
    this.body = rawNotif.body;
  }

  parsedBody(): JSON {
    console.log(this.body);
    return JSON.parse(this.body);
  }
}
