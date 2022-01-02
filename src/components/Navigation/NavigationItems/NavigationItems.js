import React from 'react';
import {useSelector} from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import LogoContainer from '../LogoContainer/LogoContainer';

import styles from './NavigationItems.module.css';

const NavigationItems = props => {
  const isMobile = useSelector (state => state.screen.screenWidth) < 600;
  const homeRef = useSelector (state => state.scroll.homeRef);
  const aboutRef = useSelector (state => state.scroll.aboutRef);
  const servicesRef = useSelector (state => state.scroll.servicesRef);
  const projectsRef = useSelector (state => state.scroll.projectsRef);
  const contactRef = useSelector (state => state.scroll.contactRef);

  const navHeaders = [
    'Home',
    'About',
    'Services',
    'Certificates',
    'Business',
    'Contact',
  ];

  const navigationHeaders = navHeaders.map (header => {
    if (!isMobile) {
      switch (header) {
        case 'Home':
          return (
            <NavigationItem key={header} navRef={homeRef}>
              {header}
            </NavigationItem>
          );
        case 'About':
          return (
            <NavigationItem key={header} navRef={aboutRef}>
              {header}
            </NavigationItem>
          );
        case 'Services':
          return (
            <NavigationItem key={header} navRef={servicesRef}>
              {header}
            </NavigationItem>
          );
        case 'Certificates':
          return (
            <NavigationItem key={header} navRef={projectsRef}>
              {header}
            </NavigationItem>
          );
        case 'Business':
          return <NavigationItem key={header} business>{header}</NavigationItem>;
        case 'Contact':
          return (
            <NavigationItem key={header} navRef={contactRef}>
              {header}
            </NavigationItem>
          );
        default:
          return '';
      }
    } else {
      if (header !== 'Home' && header !== 'Business') {
        return (
          <NavigationItem key={header} link={header}>
            {header}
          </NavigationItem>
        );
      } else if (header === 'Business') {
        return <NavigationItem key={header} business>{header}</NavigationItem>;
      } else {
        return (
          <NavigationItem key={header} link= "/">
            {header}
          </NavigationItem>
        );
      }
    }
  });

  let navigationItems = (
    <div className={styles.NavBarContainer}>
      <LogoContainer rowNav />
      <ul className={styles.NavigationItems}>
        {navigationHeaders}
      </ul>
    </div>
  );

  if (props.mobil) {
    navigationItems = (
      <div className={styles.NavBarContainerMobil}>
        <ul className={styles.NavigationItemsMobil}>
          {navigationHeaders}
        </ul>
      </div>
    );
  }

  return navigationItems;
};

export default NavigationItems;
