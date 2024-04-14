function errorHandler(error, name, from) {
  let loggerFunction = console.log;
  // if (process.env.ENV === "PROD")
  // we can have a different logger if needed
  loggerFunction('------START------');
  loggerFunction('Error occured in ' + name);

  if (from === 'axios') {
    if (error.response) {
      // the request was made an the server responded with a status code failed
      // that falls out of the range of 2xx
      loggerFunction('Error Data: ' + error.response.data);
      loggerFunction('Error Status: ' + error.response.status);
      loggerFunction('Error Headers: ' + error.response.headers);
    } else if (error.request) {
      // the request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      loggerFunction('Error Request: ' + error.request);
    }
    loggerFunction(error.toJSON());
  } else {
    loggerFunction(error);
  }

  loggerFunction('------END------');
}

module.exports = {
  errorHandler,
};
