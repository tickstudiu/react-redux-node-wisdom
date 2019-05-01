import {
    FETCH_ACTIVITY,
    FETCH_ACTIVITY_BY_ID,
    CREATE_ACTIVITY,
    DELETE_ACTIVITY,
} from '../types';

import * as tools from '../../utils/';

const initialState = {
    lastActivityID: 0,
    allActivity: [],
    activity: {},
    number: 0,
};

export default (state = initialState,action) => {
    switch (action.type){
        case FETCH_ACTIVITY:
            return {
                ...state,
                allActivity: action.payload.reverse(),
                number: action.payload.length,
            };
        case FETCH_ACTIVITY_BY_ID:
            return {
                ...state,
                activity: action.payload
            };
        case CREATE_ACTIVITY:
            tools.successNotify('created!!');
            return {
                ...state,
                lastActivityID: action.lastActivityID,
                allActivity: action.payload,
            };
        case DELETE_ACTIVITY:
            tools.warningNotify (action.payload);
            return {
                ...state,
            };
        default:
            return state;
    }
}
