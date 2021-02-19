import React from 'react';

import LinkContainer from '../../LinkContainer/LinkContainer';
import GlitchText from '../../../UI/GlitchText/GlitchText';
import NormalText from '../../../UI/NormalText/NormalText';
import {MainConstants} from '../../../../constants/Main';

import styles from './Info.module.css';

const Info = props => {
  let aboutInfos = [];
  for (let info in MainConstants.aboutInfo) {
    let glitchText = <GlitchText>{MainConstants.aboutInfo[info]}</GlitchText>;

    if (props.normalText) {
      glitchText = <NormalText>{MainConstants.aboutInfo[info]}</NormalText>;
    }
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
