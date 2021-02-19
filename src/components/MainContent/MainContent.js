import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import HomeContainer from './HomeContainer/HomeContainer';
import AboutContainer from './AboutContainer/AboutContainer';
import ServicesContainer from './ServicesContainer/ServicesContainer';
import ProjectsContainer from './ProjectsContainer/ProjectsContainer';
import ContactContainer from './ContactContainer/ContactContainer';

import styles from './MainContent.module.css';

const scrollRefBeforeLocation = ref => ref.current.offsetTop - window.innerHeight;
const scrollRefAfterLocation = ref => ref.current.offsetTop + window.innerHeight;

const MainContent = () => {
  const [scrollPosition, setScrollPosition] = useState (0);
  const aboutRef = useSelector (state => state.scroll.aboutRef);
  const servicesRef = useSelector (state => state.scroll.servicesRef);
  const projectsRef = useSelector (state => state.scroll.projectsRef);
  const contactRef = useSelector (state => state.scroll.contactRef);

  let aboutRefBeforeLocation;
  let aboutRefAfterLocation;
  if (aboutRef) {
    aboutRefBeforeLocation = scrollRefBeforeLocation (aboutRef);
    aboutRefAfterLocation = scrollRefAfterLocation(aboutRef);
  }

  let servicesRefBeforeLocation;
  let servicesRefAfterLocation;
  if (servicesRef) {
    servicesRefBeforeLocation = scrollRefBeforeLocation (servicesRef);
    servicesRefAfterLocation = scrollRefAfterLocation(servicesRef);
  }

  let projectsRefBeforeLocation;
  let projectsRefAfterLocation;
  if (projectsRef) {
    projectsRefBeforeLocation = scrollRefBeforeLocation (projectsRef);
    projectsRefAfterLocation = scrollRefAfterLocation (projectsRef);
  }

  let contactRefBeforeLocation;
  let contactRefAfterLocation;
  if (projectsRef) {
    contactRefBeforeLocation = scrollRefBeforeLocation (contactRef);
    contactRefAfterLocation = scrollRefAfterLocation (contactRef);
  }

  const handleScroll = () => {
    const positionY = window.pageYOffset;
    setScrollPosition (positionY);
  };



  useEffect (() => {
    window.addEventListener ('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener ('scroll', handleScroll);
    };
  }, []);

 

  // let noGlitchText;
  // if(screenWidth <= 600) {
  //   noGlitchText = true;
  // } else {
  //   noGlitchText = false;
  // }

  return (
    <div className={styles.MainContent}>
      <HomeContainer />
      <hr />
      <AboutContainer      
       activateBreakText={(scrollPosition > aboutRefBeforeLocation 
       && scrollPosition < aboutRefAfterLocation) ? true : false } />
      <hr />
      <ServicesContainer
       activateBreakText={(scrollPosition > servicesRefBeforeLocation 
       && scrollPosition < servicesRefAfterLocation) ? true : false }
      />
      <hr />
      <ProjectsContainer      
       activateBreakText={(scrollPosition > projectsRefBeforeLocation 
       && scrollPosition < projectsRefAfterLocation) ? true : false } />
      <hr />   
      <ContactContainer      
       activateBreakText={(scrollPosition > contactRefBeforeLocation 
       && scrollPosition < contactRefAfterLocation) ? true : false }  />
    </div>
  );
};

export default MainContent;
