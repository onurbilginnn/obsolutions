import * as actions from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    isLoading: false,
    msgSentMessage: null,
    errorMessage: null
};

const sendMailStart = ( state, action ) => {
    return updateObject( state, { errorMessage: null,msgSentMessage: null, isLoading: true } );
};

const sendMailSuccess = ( state, action ) => {
    return updateObject( state, { errorMessage: null,msgSentMessage: action.msgSentMessage, isLoading: false } );
};

const sendMailFail = ( state, action ) => {
    return updateObject( state, { errorMessage: action.errorMessage, msgSentMessage: null, isLoading: false } );
};

const sendMailReset = ( state, action ) => {
    return updateObject( state, { errorMessage: null, msgSentMessage: null, isLoading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actions.SEND_MAIL_START: return sendMailStart(state, action);
        case actions.SEND_MAIL_SUCCESS: return sendMailSuccess(state, action);
        case actions.SEND_MAIL_FAIL: return sendMailFail(state, action);
        case actions.SEND_MAIL_RESET: return sendMailReset(state, action);
        default:
            return state;
    }
};

export default reducer;