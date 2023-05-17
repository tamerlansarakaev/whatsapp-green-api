import React from 'react';
import { INotification } from '../../types';

const Message: React.FC<INotification> = ({ receiptId }) => {
  return <div>{receiptId}</div>;
};

export default Message;
