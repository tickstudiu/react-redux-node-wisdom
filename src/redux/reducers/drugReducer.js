import {
    FETCH_DRUG,
    FETCH_DRUG_BY_ID,
    CREATE_DRUG,
    CREATE_DRUG_ERROR,
} from '../types';

import * as tools from '../../utils/';

const initialState = {
    lastDrugID: 0,
    allDrug: [],
    drug: {},
    number: 0,
};

export default (state = initialState,action) => {
    switch (action.type){
        case FETCH_DRUG:
            return {
                ...state,
                allDrug: action.payload.reverse(),
                number: action.payload.length,
            };
        case FETCH_DRUG_BY_ID:
            return {
                ...state,
                drug: action.payload
            };
        case CREATE_DRUG:
            tools.successNotify('created!!');
            return {
                ...state,
                lastDrugID: action.lastHerbID,
                allDrug: action.payload,
            };
        case CREATE_DRUG_ERROR:
            tools.warningNotify (action.payload);
            return {
                ...state,
            };
        default:
            return state;
    }
}
