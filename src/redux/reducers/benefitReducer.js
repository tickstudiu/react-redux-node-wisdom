import {
    FETCH_BENEFIT,
    FETCH_BENEFIT_BY_ID,
    CREATE_BENEFIT,
    UPDATE_BENEFIT_BY_ID,
    DELETE_BENEFIT_BY_ID,
} from '../types/index';
import * as tools from '../../utils/index';

const initialState = {
    number: 0,
    allBenefit: [],
    benefit: {},
};

export default (state = initialState,action) => {
    switch (action.type){
        case FETCH_BENEFIT:
            return {
                ...state,
                allBenefit: action.payload,
                number: action.payload.length,
            };
        case FETCH_BENEFIT_BY_ID:
            return {
                ...state,
                benefit: action.payload
            };
        case CREATE_BENEFIT:
            return {
                ...state,
                benefit: action.payload
            };
        case UPDATE_BENEFIT_BY_ID:
            return {
                ...state,
                benefit: action.payload
            };
        case DELETE_BENEFIT_BY_ID:
            tools.successNotify(action.payload);
            return state;
        default:
            return state;
    }
}