import * as actionTypes from './actionTypes';

export const goHome = homeRef => {
    return {
        type: actionTypes.GO_HOME,
        ref: homeRef

    }
}

export const goAbout = aboutRef => {
    return {
        type: actionTypes.GO_ABOUT,
        ref: aboutRef
    }
}

export const goServices = servicesRef => {
    return {
        type: actionTypes.GO_SERVICES,
        ref: servicesRef

    }
}

export const goProjects = projectsRef => {
    return {
        type: actionTypes.GO_PROJECTS,
        ref: projectsRef
    }
}

export const goContact = contactRef => {
    return {
        type: actionTypes.GO_CONTACT,
        ref: contactRef
    }
}

