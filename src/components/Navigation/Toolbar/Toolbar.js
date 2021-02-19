import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';
import styles from './Toolbar.module.css';

const Toolbar = () => {
   return <div className={styles.Toolbar}>
            <SideDrawer />
            <NavigationItems />
    </div>
}

export default Toolbar;