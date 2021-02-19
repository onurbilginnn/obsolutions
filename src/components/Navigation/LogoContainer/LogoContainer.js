import React from 'react';

import logoWhite from '../../../assets/logos/OB-logo.png';
import logoSmall from '../../../assets/logos/small-logo.png';

import styles from './LogoContainer.module.css';

const LogoContainer = props => {
    let logoContainer =  <div className={styles.LogoSmallContainer} onClick={props.clicked}>
    <img src={logoSmall}
     alt="OB_Logo"                         
      className={styles.ImageSmall} />
</div>;


if(props.rowNav) {
logoContainer = (<div 
className={styles.LogoContainer}>
  <img src={logoWhite}
 alt="OB_Logo"                         
  className={styles.Image} />  
    </div>)
}
 


   return logoContainer;
}

export default LogoContainer;