import React from 'react';

import GlowText from '../UI/GlowText/GlowText';


import {MainConstants} from '../../constants/Main';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <GlowText>
        {MainConstants.year} <span className={styles.BrandContainer} >OB</span> &copy; ALL RIGHTS RESERVED
      </GlowText>

    </div>
  );
};

export default Footer;
