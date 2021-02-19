import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../../store/actions/index';
import NavigationItems from '../../NavigationItems/NavigationItems';
import LogoContainer from '../../LogoContainer/LogoContainer';
import styles from './DrawerToggle.module.css';

const DrawerToggle = () => {
    const isDrawerClosed = useSelector(state => state.screen.sideDrawerClosed);
    const dispatch = useDispatch();

    const showDrawerHandler = () => {
       if(!isDrawerClosed) {
            dispatch(actions.closeSideDrawer());
       } else {
        dispatch(actions.openSideDrawer());
       }
    }

    return     (
    <div className={styles.DrawerToggle} >
    <LogoContainer
     clicked={showDrawerHandler}
     />
    {!isDrawerClosed && <NavigationItems mobil />}
    </div>)
}

export default DrawerToggle;