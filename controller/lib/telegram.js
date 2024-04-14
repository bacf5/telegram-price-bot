const { getAxiosInstance } = require('./axios');
const { errorHandler } = require('./helpers');

const MY_TOKEN = process.env.TELE_BOT_TOKEN;
const BASE_URL = ` https://api.telegram.org/bot${MY_TOKEN}`;
const axiosInstance = getAxiosInstance(BASE_URL);

function sendMessage(chatId, messageText) {
  return axiosInstance
    .get('sendMessage', {
      chat_id: chatId,
      text: messageText,
    })
    .catch((error) => {
      errorHandler(error, 'sendMessage', 'axios');
    });
}

async function handleMessage(messageObj) {
  const messageText = messageObj.text || '';
  if (!messageText) {
    errorHandler('no message text', 'handleMessage');
    return '';
  }
  try {
    const chatId = messageObj.chat.id;

    // if (chatId === "my chat id"){} to only respond to me, but not the case for now

    if (messageText.charAt(0) === '/') {
      // i know substr is deprecated
      const command = messageText.substr(1);
      switch (command) {
        case 'start':
          // send message welcoming the user
          return sendMessage(chatId, 'Hi, im a bot, welcome thanks for using start');

        default:
          return sendMessage(chatId, "I don't understand your command");
      }
    } else {
      return sendMessage(chatId, messageText);
    }
  } catch (error) {
    errorHandler(error, 'handleMessage');
  }
}

module.exports = { sendMessage, handleMessage };
