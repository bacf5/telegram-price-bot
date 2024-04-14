const { handleMessage, sendMessage } = require('./lib/telegram');
const { errorHandler } = require('./lib/helpers');

async function handler(req, method) {
  try {
    if (method === 'GET') {
      return 'hello get';
    }
    const { body } = req;
    if (body && body.message) {
      const messageObj = body.message;
      await handleMessage(messageObj);
      return 'success';
    }

    return 'Unknown request';
  } catch (error) {
    errorHandler(error, 'main index handler');
  }
}

module.exports = { handler };
