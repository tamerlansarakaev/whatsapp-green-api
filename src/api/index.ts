import axios from 'axios';

export interface configNotiface {
  IdInstance: string;
  ApiTokenInstance: string;
  phoneNumber?: string;
  message?: string | number;
}

const defaultURL = 'https://api.green-api.com';

export const getContacts = async ({
  IdInstance,
  ApiTokenInstance,
}: configNotiface) => {
  try {
    const response = await axios.get(
      `${defaultURL}/waInstance${IdInstance}/GetContacts/${ApiTokenInstance}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const sendMessage = async ({
  ApiTokenInstance,
  phoneNumber,
  IdInstance,
  message,
}: configNotiface) => {
  try {
    const response = await axios.post(
      `${defaultURL}/waInstance${IdInstance}/SendMessage/${ApiTokenInstance}`,
      {
        chatId: phoneNumber,
        message,
      }
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getMessages = async ({
  IdInstance,
  ApiTokenInstance,
  phoneNumber,
}: configNotiface) => {
  try {
    const response = await axios.post(
      `${defaultURL}/waInstance${IdInstance}/GetChatHistory/${ApiTokenInstance}`,
      {
        chatId: phoneNumber,
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
  }
};
