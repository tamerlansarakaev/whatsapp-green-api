import React from 'react';

import { IData, IMessage } from '../../types';
import { getMessages, sendMessage } from '../../api';
import { useAppSelector } from '../../redux/config';
import { useNavigate } from 'react-router-dom';
import { sliceTextForPhoneNumber } from '../../utils';

import styles from './Chat.module.scss';

const Chat: React.FC<IData> = () => {
  const [messages, setMessages] = React.useState<IMessage[]>();
  const [value, setValue] = React.useState('');
  const config = useAppSelector((state) => state.globalReducer.config);
  const navigate = useNavigate();
  const phoneNumber = useAppSelector(
    (state) => state.globalReducer.phoneNumber
  );

  const messageBoxRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value && config) return;
    const { ApiTokenInstance, IdInstance }: any = config;
    const response = await sendMessage({
      ApiTokenInstance,
      IdInstance,
      phoneNumber,
      message: value,
    });
    setValue('');
    return response;
  };

  React.useEffect(() => {
    if (config && phoneNumber) {
      const message = async () => {
        const { ApiTokenInstance, IdInstance }: any = config;
        const response = await getMessages({
          IdInstance,
          ApiTokenInstance,
          phoneNumber,
        });
        setMessages(response.reverse());
      };
      setInterval(() => {
        message();
      }, 3000);
    } else {
      navigate('/');
    }
  }, [config]);

  React.useEffect(() => {
    if (messageBoxRef.current && phoneNumber) {
      messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
    }
  }, [messageBoxRef, messages]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Chat: +{phoneNumber && sliceTextForPhoneNumber(phoneNumber)}
      </h1>
      <div className={styles.messageBox} ref={messageBoxRef}>
        {messages &&
          messages.map((state, i) => {
            if (
              state.type === 'incoming' &&
              state.textMessage &&
              state.textMessage.length
            ) {
              return (
                <React.Fragment key={i}>
                  <p
                    className={styles.message}
                    style={{
                      borderRadius: '8px',
                      color: '#fff',
                      background: 'rgb(245 59 59)',
                    }}
                  >
                    {state.textMessage}
                  </p>
                  <span></span>
                </React.Fragment>
              );
            } else if (
              state.type === 'outgoing' &&
              state.textMessage &&
              state.textMessage.length
            ) {
              return (
                <div
                  style={{
                    marginLeft: 'auto',
                  }}
                  className={styles.message}
                  key={i}
                >
                  <p
                    className={styles.message}
                    style={{
                      borderRadius: '8px',
                      background: 'rgb(143 255 150)',
                    }}
                  >
                    {state.textMessage}
                  </p>
                </div>
              );
            }
          })}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.formInput}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.formButton}>Send message</button>
      </form>
    </div>
  );
};

export default Chat;
