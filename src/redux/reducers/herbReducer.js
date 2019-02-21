import {
    FETCH_HERB,
    FETCH_HERB_BY_ID,
    FETCH_HERB_ERROR,
    CREATE_HERB,
    CREATE_HERB_ERROR,
    UPDATE_HERB,
    UPDATE_HERB_ERROR,
    DELETE_HERB,
    DELETE_HERB_ERROR
} from '../types';

import * as tools from '../../utils/';

const initalState = {
    lastHerbID: 0,
    allHerb: [],
    herb: {},
};

export default (state = initalState,action) => {
    switch (action.type){
        case FETCH_HERB:
            return {
                ...state,
                allHerb: action.payload.reverse(),
            };
        case FETCH_HERB_BY_ID:
            return {
                ...state,
                herb: action.payload
            };
        case CREATE_HERB:
            tools.successNotify('created!!');
            return {
                ...state,
                lastHerbID: action.lastHerbID,
                allHerb: action.payload,
            };
        case CREATE_HERB_ERROR:
            tools.warningNotify (action.payload);
            return {
                ...state,
            };
        default:
            return state;
    }
}
