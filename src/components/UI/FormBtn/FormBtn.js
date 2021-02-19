import React, {useState} from 'react';

import styles from './FormBtn.module.css';

const FormBtn = props => {

    const [bgColor, setBgColor] = useState(props.backgroundcolor);
    const [textColor, setTextColor] = useState('var(--black)');

    const myStyle = {
        backgroundColor: bgColor,
        borderColor: bgColor,
        color: textColor
    }

    return <button className={styles.FormBtn} {...props} 
    style={myStyle}
    onMouseEnter={() => {
        setBgColor('var(--black)');
        setTextColor(props.backgroundcolor)
        }}
    onMouseLeave={() => {
        setBgColor(props.backgroundcolor);
        setTextColor('var(--black)');
        }}
    >{props.children}</button>
};

export default FormBtn;