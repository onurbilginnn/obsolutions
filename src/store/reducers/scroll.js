import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    homeRef: null,
    aboutRef: null,
    servicesRef: null,
    projectsRef: null,
    contactRef: null
}

const goHome = (state, action) => {
    return updateObject( state, {
        homeRef: action.ref
    })
}

const goAbout = (state, action) => {
    return updateObject( state, {
        aboutRef: action.ref
    })
}

const goServices = (state, action) => {
    return updateObject( state, {
        servicesRef: action.ref
    })
}

const goProjects = (state, action) => {
    return updateObject( state, {
        projectsRef: action.ref
    })
}

const goContact = (state, action) => {
    return updateObject( state, {
        contactRef: action.ref
    })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GO_HOME: return goHome(state, action);
        case actionTypes.GO_ABOUT: return goAbout(state, action);
        case actionTypes.GO_SERVICES: return goServices(state, action);
        case actionTypes.GO_PROJECTS: return goProjects(state, action);
        case actionTypes.GO_CONTACT: return goContact(state, action);
        default:
            return state;
    }
};

export default reducer;