import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    screenWidth: window.innerWidth,
    sideDrawerClosed: true
} 

const openSideDrawer = ( state, action ) => {
    return updateObject( state, { sideDrawerClosed: false } );
};

const closeSideDrawer = ( state, action ) => {
    return updateObject( state, { sideDrawerClosed: true } );
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actions.SCREEN_CLOSE_SIDE_DRAWER: return closeSideDrawer(state, action);
        case actions.SCREEN_OPEN_SIDE_DRAWER: return openSideDrawer(state, action);
        default:
            return state;
    }
};

export default reducer;