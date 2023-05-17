export interface IUser {
  type?: string;
  name: string;
  id: string;
}

export interface IMessage {
  chatId: string;
  textMessage: string;
  type?: string;
  timestamp?: number;
  idMessage: string;
}

export interface INotification {
  receiptId: string;
}

export interface IData {
  user?: IUser | null;
  messagesList?: IMessage[];
  phoneNumber?: string;
  config?: {
    IdInstance: string | number;
    ApiTokenInstance: string;
  } | null;
}
