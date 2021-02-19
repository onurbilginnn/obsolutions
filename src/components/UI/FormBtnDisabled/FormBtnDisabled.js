import React from 'react';

import styles from './FormBtnDisabled.module.css';

const FormBtnDisabled = props => {


    return <button className={styles.FormBtnDisabled} {...props} disabled
    >{props.children}</button>
};

export default FormBtnDisabled;