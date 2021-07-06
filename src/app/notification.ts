export interface INotification {
  id: number;
  receivedAt: string; //date
  rawBody: string;
}

export class Notification implements INotification {
  id: number;
  receivedAt: string;
  rawBody: string;

  constructor(rawNotif: INotification) {
    this.id = rawNotif.id;
    this.receivedAt = rawNotif.receivedAt;
    this.rawBody = rawNotif.rawBody;
  }

  parsedBody(): JSON {
    console.log(this.rawBody);
    return JSON.parse(this.rawBody);
  }
}
