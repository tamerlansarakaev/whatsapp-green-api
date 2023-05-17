export interface IUser {
  typeAccount: string;
  countryInstance: string;
  wid: string;
}

export interface IMessage {
  chatId: string;
  textMessage: string;
  timestamp?: number | string;
  idMessage: string;
}

export interface INotification {
  receiptId: string;
}

export interface IData {
  user?: IUser;
  messagesList: IMessage[];
}
