import React, {useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {CircleProgress} from 'react-gradient-progress'

import styles from './AboutContainer.module.css';
import smallHomeImage from '../../../assets/images/small-home-bg.png';
import GlowText from '../../UI/GlowText/GlowText';
import BreakingText from '../../UI/BreakingText/BreakingText';
import Info from './Info/Info';
import {MainConstants} from '../../../constants/Main';
import * as actions from '../../../store/actions/index';

const AboutContainer = props => {
  const aboutRef = useRef (null);

  const dispatch = useDispatch ();

  const [percentages] = useState ({
    node: {
      title: 'NodeJS',
      trailColor: 'white',
      color: ['#67A063', '#65f05c'],
      percentage: 85,
    },
    react: {
      title: 'React',
      trailColor: '#202429',
      color: ['#2594f0', '#b7eff5'],
      percentage: 85,
    },
    flutter: {
      title: 'Flutter',
      trailColor: '#202429',
      color: ['#0E46A0', '#68B7F8'],
      percentage: 70,
    },
    aws: {
      title: 'AWS',
      trailColor: '#22303E',
      color: ['#F39000', '#fff2cc' ],
      percentage: 90,
    },
    sql: {
      title: 'SQL',
      trailColor: 'white',
      color: ['#B25457', '#fe9af6'],
      percentage: 90,
    },
    noSql: {
      title: 'No SQL',
      trailColor: 'white',
      color: ['#94c6f3', '#fcffa7'],
      percentage: 85,
    },
  });

  useEffect (
    () => {
      if (aboutRef) {
        dispatch (actions.goAbout (aboutRef));
      }
      return;
    },
    [dispatch, aboutRef]
  );

  let percentageElements = [];

  for (let el in percentages) {
    percentageElements.push (
      <div key={el}>
        <h4 className={styles.ProgressBarLabel}>{percentages[el].title}</h4>
        <CircleProgress 
        width={100}
        percentage={percentages[el].percentage}
         primaryColor={percentages[el].color}
          secondaryColor={'white'}
        />
      </div>
    );
  }


  return (
    <div className={styles.AboutContainer} ref={aboutRef}>
      {props.activateBreakText && <BreakingText>About</BreakingText>}
      <div className={styles.AboutTextImageContainer}>
        <div className={styles.TextContainer}>
          <GlowText
            color="#ffffff"
            dangerouslySetInnerHTML={{__html: MainConstants.aboutText}}
          />
          <Info normalText={props.noGlitchText} />
        </div>

        <div className={styles.AboutImageContainer}>
          <img
            className={styles.AboutImage}
            src={smallHomeImage}
            alt="About_image"
          />
        </div>
      </div>
      <div className={styles.ProgressBarContainer}>
        {percentageElements}
      </div>
    </div>
  );
};

export default AboutContainer;
