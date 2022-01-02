import * as actions from './actionTypes';

export const sendMailStart = () => {
  return {
    type: actions.SEND_MAIL_START,
  };
};

export const sendMailSuccess = msgSentMessage => {
  return {
    type: actions.SEND_MAIL_SUCCESS,
    msgSentMessage: msgSentMessage,
  };
};

export const sendMailFail = errorMessage => {
  return {
    type: actions.SEND_MAIL_FAIL,
    errorMessage: errorMessage,
  };
};

export const sendMailReset = () => {
  return {
    type: actions.SEND_MAIL_RESET,
  };
};

export const sendMail = (name, email, message) => {
  return dispatch => {
    dispatch (sendMailStart ());

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_API_KEY},
      body: JSON.stringify ({
        email: email,
        name: name,
        message: message,
      }),
    };
      fetch (process.env.REACT_APP_MAIL_URL, requestOptions)
      .then(response => {
          if (response.status === 200) {
            dispatch (sendMailSuccess ('Message sent succesfully.'));
          } else {
            dispatch (sendMailFail ('Message not sent!'));
          }
          console.log (response);
      })
        .catch (error => {
            dispatch (sendMailFail ('Message not sent!'));
            console.log (error);
        })    
  };
};
