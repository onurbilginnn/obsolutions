import React from 'react';

import GlitchText from '../../UI/GlitchText/GlitchText';
import NormalText from '../../UI/NormalText/NormalText';

import styles from './FormTextArea.module.css';

const FormTextArea = props => {

    let label = <GlitchText center>{props.label}</GlitchText>;

    if(props.normalText) {
         label = <NormalText center>{props.label}</NormalText>;
    }

    return (<>
    {label}
     <textarea 
     {...props}
    rows={props.rows}
    className={styles.FormTextArea}></textarea>
    </>)
};

export default FormTextArea;