/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import styles from './NavigationItem.module.css';

const scrollToRef = ref => window.scrollTo (0, ref.current.offsetTop - 150);

const NavigationItem = props => {
  const isMobile = useSelector (state => state.screen.screenWidth) < 600;
  let navItem;
  // ****************** Desktop Version ******************
  const executeScroll = () => scrollToRef (props.navRef);

  if (!isMobile) {
    navItem = (
      <li className={styles.LinkContainer}>
        <a
          onClick={executeScroll}
          className={styles.Link}
          style={{backgroundColor: props.colorBg}}
        >
          {props.children}
        </a>
      </li>
    );

    if (props.business) {
      navItem = (
        <li className={styles.LinkContainer}>
          <a
            href="https://onurbilginnn.github.io/obsolutions-business/#/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.LinkBusiness}
            style={{backgroundColor: props.colorBg}}
          >
            {props.children}
          </a>
        </li>
      );
    }
    // ****************** Desktop Version ******************
  } else {
    // ****************** Mobile Version ******************
    if (props.business) {
      navItem = (
        <li className={styles.LinkContainer}>
          <a
            href="https://onurbilginnn.github.io/obsolutions-business/#/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.LinkBusiness}
            style={{backgroundColor: props.colorBg}}
          >
            {props.children}
          </a>
        </li>
      );
    } else {
      navItem = (
        <li className={styles.LinkContainer}>
          <NavLink
          className={styles.Navlink}
             to={props.link}
              exact={props.exact}
          >
            {props.children}
          </NavLink>
        </li>
      );
    }
    // ****************** Mobile Version ******************
  }

  return navItem;
};

export default NavigationItem;
