import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CountUp from 'react-countup';

import BreakingText from '../../UI/BreakingText/BreakingText';
import {MainConstants} from '../../../constants/Main';
import { FaBuilding, FaTasks, FaBusinessTime, FaUserClock } from 'react-icons/fa';
import * as actions from '../../../store/actions/index';

import styles from './ServicesContainer.module.css';

const ServicesContainer = props => {
  let services = [];

  const servicesRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if(servicesRef) {
        dispatch(actions.goServices(servicesRef));
    }
    return;
}, [dispatch, servicesRef])

  for (let service in MainConstants.services) {
    services.push (
      <div className={styles.ServiceBoxContainer} key={service}>
        <div className={styles.ServiceBox} key={service}>
          <div className={styles.IconContainer}>
            {MainConstants.services[service].icon}
          </div>
          <h3>{MainConstants.services[service].title}</h3>
          <p className={styles.ServiceText}>
            {MainConstants.services[service].statement}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.ServicesContainer} ref={servicesRef} >
     { props.activateBreakText && <BreakingText>Services</BreakingText> }
      <div className={styles.ServiceBoxesContainer}>
        {services}
      </div>
      <div className={styles.RankingsContainer}>
        <div className={styles.RankingBox} >
        <div className={styles.RankIconContainer} >
            <FaTasks/>
        </div>
            <h3>Projects Completed</h3>
            <h3><CountUp end={10} duration={5}/></h3>
        </div>
        <div className={styles.RankingBox} >
        <div className={styles.RankIconContainer} >
            <FaBusinessTime />
        </div>
            <h3>Different Sectors</h3>
            <h3><CountUp end={6} duration={5}/></h3>
        </div>
        <div className={styles.RankingBox} >
        <div className={styles.RankIconContainer} >
             <FaBuilding />
        </div>
            <h3>Companies Worked</h3>
            <h3><CountUp end={10} duration={5}/></h3>
        </div>
        <div className={styles.RankingBox} >
        <div className={styles.RankIconContainer} >
            <FaUserClock />
        </div>
            <h3>Years of Experience</h3>
            <h3><CountUp end={12} duration={5}/></h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesContainer;
