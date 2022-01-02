import React from 'react';

import LinkContainer from '../../LinkContainer/LinkContainer';
import {MainConstants} from '../../../../constants/Main';

import styles from './Info.module.css';

const Info = props => {
  let aboutInfos = [];
  for (let info in MainConstants.aboutInfo) {
    const glitchText = <h3>{MainConstants.aboutInfo[info]}</h3>;

    aboutInfos.push (
      <li key={info} className={styles.InfoItem}>
        {glitchText}
      </li>
    );
  }

  return (
    <div className={styles.InfoContainer}>
      <ul className={styles.InfoList}>
        {aboutInfos}
      </ul>
      <LinkContainer />
    </div>
  );
};

export default Info;
