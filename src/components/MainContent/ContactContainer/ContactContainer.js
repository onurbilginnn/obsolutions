import React, {useRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ClockLoader from 'react-spinners/ClockLoader';
import BreakingText from '../../UI/BreakingText/BreakingText';
import GlowText from '../../UI/GlowText/GlowText';
import FormBtn from '../../UI/FormBtn/FormBtn';
import FormBtnDisabled from '../../UI/FormBtnDisabled/FormBtnDisabled';
import FormInput from '../../UI/FormInput/FormInput';
import FormTextArea from '../../UI/FormTextArea/FormTextArea';
import LinkContainer from '../LinkContainer/LinkContainer';
import {FaAddressBook, FaMailBulk, FaPhone} from 'react-icons/fa';
import {MainConstants} from '../../../constants/Main';
import * as actions from '../../../store/actions/index';
import {checkValidity, updateObject} from '../../../shared/utility';

import styles from './ContactContainer.module.css';

const ContactContainer = props => {
  const [senderName, setSenderName] = useState ({
    value: '',
    isValid: false,
    isTouched: false,
    validation: {required: true},
    errorMessage: '',
  });
  const [email, setEmail] = useState ({
    value: '',
    isValid: false,
    isTouched: false,
    validation: {
      required: true,
      isEmail: true,
    },
    errorMessage: '',
  });
  const [message, setMessage] = useState ({
    value: '',
    isValid: false,
    isTouched: false,
    validation: {required: true, minLength: 10, maxLength: 400},
    errorMessage: '',
  });
  const sentRdxMessage = useSelector (state => state.mail.msgSentMessage);
  const errorRdxMessage = useSelector (state => state.mail.errorMessage);
  const loading = useSelector (state => state.mail.isLoading);
  const contactRef = useRef (null);
  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (contactRef) {
        dispatch (actions.goContact (contactRef));
      }
      return;
    },
    [dispatch, contactRef]
  );

  const handleInputChange = event => {
    const {name, value} = event.target;
    switch (name) {
      case 'senderName':
        setSenderName (
          updateObject (senderName, {
            value: value,
            isValid: checkValidity (value, senderName.validation).isValid,
            isTouched: true,
            errorMessage: checkValidity (value, senderName.validation).errorArr,
          })
        );
        break;
      case 'email':
        setEmail (
          updateObject (email, {
            value: value,
            isValid: checkValidity (value, email.validation).isValid,
            isTouched: true,
            errorMessage: checkValidity (value, email.validation).errorArr,
          })
        );
        break;
      case 'message':
        setMessage (
          updateObject (message, {
            value: value,
            isValid: checkValidity (value, message.validation).isValid,
            isTouched: true,
            errorMessage: checkValidity (value, message.validation).errorArr,
          })
        );
        break;
      default:
        break;
    }
  };

  const clearFormHandler = () => {
    setSenderName (
      updateObject (message, {
        value: '',
        isValid: false,
        isTouched: false,
        errorMessage: ''
      })
    );
    setEmail (
      updateObject (message, {
        value: '',
        isValid: false,
        isTouched: false,
        errorMessage: ''
      })
    );
    setMessage (
      updateObject (message, {
        value: '',
        isValid: false,
        isTouched: false,
        errorMessage: ''
      })
    );
  }

  const submitHandler = event => {
    event.preventDefault ();
    dispatch (actions.sendMail (senderName.value, email.value, message.value));
    clearFormHandler();
    
  };

  let sendBtn = (
    <FormBtnDisabled>
      Send
    </FormBtnDisabled>
  );
  if (senderName.isValid && email.isValid && message.isValid) {
    sendBtn = (
      <FormBtn type="submit">
        Send
      </FormBtn>
    );
  }

  let messageSentNotif = <p className={styles.MessageSentNotif} >OBSolutions</p>;

  if(errorRdxMessage) {
    messageSentNotif = <p className={styles.MessageSentNotif} style={{fontSize: '1.2rem', color:'var(--red)'}} >{errorRdxMessage}</p>
    setTimeout(() => {
      dispatch(actions.sendMailReset());
    }, 3000)
  };

  if(sentRdxMessage) {
    messageSentNotif = <p className={styles.MessageSentNotif} style={{fontSize: '1.2rem', color:'var(--orange)'}} >{sentRdxMessage}</p>
    setTimeout(() => {
      dispatch(actions.sendMailReset());
    }, 3000)
  }

  return (
    <div className={styles.ContactContainer} ref={contactRef}>
      {props.activateBreakText && <BreakingText>Contact</BreakingText>}
      <div className={styles.ContactInfoContainer}>
        <form
          onSubmit={submitHandler}
          className={styles.ContactSendMessageForm}
        >
      {messageSentNotif}
          <FormInput 
            name="senderName"
            onChange={handleInputChange}
            label="Your Name"
            disabled={loading}
            value={senderName.value}
          />
          {!senderName.isValid &&
            senderName.isTouched &&
            <p className={styles.ErrorMessage}>{senderName.errorMessage}</p>}
          <FormInput
            name="email"
            onChange={handleInputChange}
            label="Your E-mail"
            disabled={loading}
            value={email.value}
          />
          {!email.isValid &&
            email.isTouched &&
            <p className={styles.ErrorMessage}>{email.errorMessage}</p>}
          <FormTextArea
            name="message"
            onChange={handleInputChange}
            rows={10}
            label="Your Message"
            disabled={loading}
            value={message.value}
          />
          {!message.isValid &&
            message.isTouched &&
            <p className={styles.ErrorMessage}>{message.errorMessage}</p>}
          <div className={styles.FormBtnContainer}>
            {loading
              ? <ClockLoader color="var(--red)" />
              : sendBtn}
            {!loading &&
              <FormBtn backgroundcolor="var(--white)" type="button" onClick={clearFormHandler} >
                Clear
              </FormBtn>}
          </div>
        </form>
        <div className={styles.ContactInfoBoxes}>
          <div className={styles.ContactInfoBox}>
            <GlowText textalign="left">
              <FaAddressBook /> {MainConstants.contact.address}
            </GlowText>
          </div>
          <div className={styles.ContactInfoBox}>
            <GlowText textalign="left">
              <FaMailBulk /> {MainConstants.contact.email}
            </GlowText>
          </div>
          <div className={styles.ContactInfoBox}>
            <GlowText textalign="left">
              <FaPhone />
              {' '}
              <a href={`tel:${MainConstants.contact.phoneForCall}`}>
                {MainConstants.contact.phone}
              </a>
            </GlowText>
          </div>
              <LinkContainer center />
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
