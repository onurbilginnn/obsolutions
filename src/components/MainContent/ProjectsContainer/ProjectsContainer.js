import React, {useRef,useEffect} from 'react';
import {useDispatch} from 'react-redux';

import * as actions from '../../../store/actions/index';
import BreakingText from '../../UI/BreakingText/BreakingText';
import GlitchText from '../../UI/GlitchText/GlitchText';
import NormalText from '../../UI/NormalText/NormalText';
import { MainConstants } from '../../../constants/Main';

import styles from './ProjectsContainer.module.css';

const ProjectsContainer = props => {
  const projectsRef = useRef (null);

  const dispatch = useDispatch ();

  useEffect (
    () => {
      if (projectsRef) {
        dispatch (actions.goProjects(projectsRef));
      }
      return;
    },
    [dispatch, projectsRef]
  );

  let projectElements = [];
  for(let el in MainConstants.projects) {
    let glitchTexts = [];

    for(let text in MainConstants.projects[el].projects) {
      if(props.noGlitchText) {
        glitchTexts.push( <NormalText key={text} >{MainConstants.projects[el].projects[text]}</NormalText>)
      } else {
        glitchTexts.push( <GlitchText key={text} center>{MainConstants.projects[el].projects[text]}</GlitchText>)
      }
    }
    projectElements.push(   <div key={el} className={styles.ProjectBox}>
      <img className={styles.ProjectImg}
       src={MainConstants.projects[el].img}
        alt={MainConstants.projects[el].imgAlt} />
      <div className={styles.ProjectTextContainer}>
      {glitchTexts}
      </div>
    </div>);
  }


  return (
    <div className={styles.ProjectsContainer} ref={projectsRef} >
      { props.activateBreakText && <BreakingText>Projects</BreakingText>}
      <div className={styles.ProjectBoxesContainer}>
        {projectElements}
      </div>
    </div>
  );
};

export default ProjectsContainer;
