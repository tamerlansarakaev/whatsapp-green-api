import React from 'react';

import styles from './Home.module.scss';
import MessagesList from '../../Components/MessagesList/MessagesList';
import { getContacts, getMessages } from '../../api';

const Home = () => {
  const [messages, setMessages] = React.useState();

  async function getMessagesList() {
    const messagesList = await getMessages({
      IdInstance: 1101821186,
      ApiTokenInstance: '29187b7ace65413a9650c771b3c541ddf3367c5fa8f2446db2',
      number: '905316855186',
    });

    const contacts = await getContacts({
      IdInstance: 1101821186,
      ApiTokenInstance: '29187b7ace65413a9650c771b3c541ddf3367c5fa8f2446db2',
    });
    console.log(contacts);
  }

  return (
    <div className={styles.container}>
      <button onClick={getMessagesList}>Get Notificate</button>
      <MessagesList messages={messages} />
    </div>
  );
};

export default Home;
