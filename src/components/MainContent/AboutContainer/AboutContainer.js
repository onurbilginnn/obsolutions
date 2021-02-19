import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Progress} from 'react-sweet-progress';

import styles from './AboutContainer.module.css';
import smallHomeImage from '../../../assets/images/small-home-bg.png';
import GlowText from '../../UI/GlowText/GlowText';
import BreakingText from '../../UI/BreakingText/BreakingText';
import Info from './Info/Info';
import {MainConstants} from '../../../constants/Main';
import * as actions from '../../../store/actions/index';
import 'react-sweet-progress/lib/style.css';

const AboutContainer = props => {
  const aboutRef = useRef (null);

  const dispatch = useDispatch ();

  const [percentages, setPercentages] = useState ({
    node: {
      title: 'NodeJS',
      trailColor: 'white',
      color: '#67A063',
      percentage: 0,
    },
    react: {
      title: 'React',
      trailColor: '#202429',
      color: '#61DAFB',
      percentage: 0,
    },
    reactNative: {
      title: 'React Native',
      trailColor: '#202429',
      color: '#61DAFB',
      percentage: 0,
    },
    aws: {
      title: 'AWS',
      trailColor: '#22303E',
      color: '#EC902C',
      percentage: 0,
    },
    sql: {
      title: 'SQL',
      trailColor: 'white',
      color: '#A91C22',
      percentage: 0,
    },
    noSql: {
      title: 'No SQL',
      trailColor: 'white',
      color: '#0872F6',
      percentage: 0,
    },
  });

  const increasePercentage = useCallback (
    (nodeNumber, reactNumber, rnNumber, awsNumber, sqlNumber, noSqlNumber) => {
      const updatedPercentages = {...percentages};
      updatedPercentages.node.percentage = nodeNumber;
      updatedPercentages.react.percentage = reactNumber;
      updatedPercentages.reactNative.percentage = rnNumber;
      updatedPercentages.aws.percentage = awsNumber;
      updatedPercentages.sql.percentage = sqlNumber;
      updatedPercentages.noSql.percentage = noSqlNumber;
      setPercentages (updatedPercentages);
    },
    [percentages]
  );

  useEffect (
    () => {
      const timer = setTimeout (() => {
        increasePercentage (88, 80, 75, 60, 90, 85);
      }, 200);
      return () => clearTimeout (timer);
    },
    [increasePercentage]
  );

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
        <Progress
          percent={percentages[el].percentage}
          theme={{
            active: {
              trailColor: percentages[el].trailColor,
              color: percentages[el].color,
            },
          }}
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
            color="#F2AA4CFF"
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
