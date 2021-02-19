import React from 'react';

import styles from './NormalText.module.css';

const NormalText = props => {

    let normalText =  <p className={styles.NormalText}>{props.children}</p>;

    if(props.h1) {
        normalText =  <h1 className={styles.NormalText}>{props.children}</h1>;
    }

    if(props.h2) {
        normalText =  <h2 className={styles.NormalText}>{props.children}</h2>;
    }

    return normalText
};

export default NormalText;