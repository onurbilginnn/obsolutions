import * as actions from './actionTypes';
import { Service } from '../../constants/Service';

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
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify ({
        email: email,
        name: name,
        message: message,
      }),
    };
      fetch (Service.mail.url, requestOptions)
      .then(response => {
          if (response.status === 250) {
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
