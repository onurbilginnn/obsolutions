import React, { useEffect, useRef } from 'react';
import TypeIt from 'typeit-react';
import { useDispatch } from 'react-redux';

import styles from './HomeContainer.module.css';
import GlitchText from '../../UI/GlitchText/GlitchText';
import NormalText from '../../UI/NormalText/NormalText';
import * as actions from '../../../store/actions/index';
import {MainConstants} from '../../../constants/Main';

const HomeContainer = props => {

  const homeRef = useRef(null);

  const dispatch = useDispatch();

  const techs1 = [];
  for (let i = 0; i < MainConstants.techs.length / 2; i++) {
    techs1.push (<div className={styles.Tag} key={i} >{MainConstants.techs[i]}</div>);
  }

  const techs2 = [];
  for (let i = MainConstants.techs.length / 2;i < MainConstants.techs.length; i++) {
    techs2.push (<div className={styles.Tag} key={i} >{MainConstants.techs[i]}</div>);
  }


  useEffect(() => {
    if(homeRef) {
        dispatch(actions.goHome(homeRef));
    }
    return;
}, [dispatch, homeRef])

let glitchText =    <div className={styles.InfoHeader}>
<GlitchText h2 >{MainConstants.name}</GlitchText>
<GlitchText h2 >{MainConstants.surname}</GlitchText>
</div>;

if(props.noGlitchText) {
  glitchText =    <div className={styles.InfoHeader}>
<NormalText h2 >{MainConstants.name}</NormalText>
<NormalText h2 >{MainConstants.surname}</NormalText>
</div>;
}

  return (
    <div className={styles.HomeContainer} ref={homeRef} >  
    {glitchText}
      <div className={styles.InfoTagContainer}>
        <div className={styles.InfoContainer}>
          <TypeIt
            element={'h3'}
            options={{loop: true}}
            getBeforeInit={instance => {
              for (let el in MainConstants.titles) {
                instance.type (MainConstants.titles[el]).pause (500).delete ();
              }
              return instance;
            }}
          />
        </div>
        <div className={styles.TagContainer}>
          <div>
            {techs1}
          </div>
          <div>
            {techs2}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
