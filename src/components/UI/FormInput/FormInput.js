import React from 'react';

import GlitchText from '../../UI/GlitchText/GlitchText';
import NormalText from '../../UI/NormalText/NormalText';

import styles from './FormInput.module.css';

const FormInput = props => {

     let label = <GlitchText center>{props.label}</GlitchText>;

     if(props.normalText) {
          label = <NormalText center>{props.label}</NormalText>;
     }

     return <>
       {label}
    <input {...props} className={styles.FormInput}/>
     </> 
};

export default FormInput;