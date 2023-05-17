import axios from 'axios';

interface configNotiface {
  IdInstance: string | number;
  ApiTokenInstance: string;
  number?: string;
}

const defaultURL = 'https://api.green-api.com';

export const getMessages = async ({
  IdInstance,
  ApiTokenInstance,
  number,
}: configNotiface) => {
  try {
    // const response = await axios.get(
    //   `${defaultURL}/waInstance${IdInstance}/ReceiveNotification/${ApiTokenInstance}`
    // );

    const response = await axios.post(
      `${defaultURL}/waInstance${IdInstance}/GetChatHistory/${ApiTokenInstance}`,
      {
        chatId: `${number}@c.us`,
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getContacts = async ({
  IdInstance,
  ApiTokenInstance,
}: configNotiface) => {
  const response = await axios.get(
    `${defaultURL}/waInstance${IdInstance}/GetContacts/${ApiTokenInstance}`
  );
  return response.data;
};
