import * as actionTypes from './actionTypes';

export const openSideDrawer = () => {
    return {
        type: actionTypes.SCREEN_OPEN_SIDE_DRAWER,
    }
}

export const closeSideDrawer = () => {
    return {
        type: actionTypes.SCREEN_CLOSE_SIDE_DRAWER,
    }
}
