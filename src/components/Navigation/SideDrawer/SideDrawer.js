import React from 'react';

import styles from './SideDrawer.module.css';

import DrawerToggle from './DrawerToggle/DrawerToggle';

const SideDrawer = () => {
   
    return ( <div className={styles.SideDrawer}>
        <DrawerToggle />
    </div>
    )
}

export default SideDrawer;