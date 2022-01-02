import React, {useRef,useEffect} from 'react';
import {useDispatch} from 'react-redux';

import * as actions from '../../../store/actions/index';
import BreakingText from '../../UI/BreakingText/BreakingText';
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
        glitchTexts.push( <h3 style={{margin: 0}} key={text}>{MainConstants.projects[el].projects[text]}</h3>)
      
    }
    projectElements.push(   <div key={el} className={styles.ProjectBox}>
    <a rel="noopener noreferrer" target='_blank' href={MainConstants.projects[el].link}>
      <img className={styles.ProjectImg}
       src={MainConstants.projects[el].img}
        alt={MainConstants.projects[el].imgAlt} />
      <div className={styles.ProjectTextContainer}>
      {glitchTexts}
      </div>
    </a>
    </div>);
  }


  return (
    <div className={styles.ProjectsContainer} ref={projectsRef} >
      { props.activateBreakText && <BreakingText>Certificates</BreakingText>}
      <div className={styles.ProjectBoxesContainer}>
        {projectElements}
      </div>
    </div>
  );
};

export default ProjectsContainer;
