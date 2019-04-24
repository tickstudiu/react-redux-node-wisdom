import {
    FETCH_INGREDIENT,
    FETCH_INGREDIENT_BY_ID,
    CREATE_INGREDIENT,
    UPDATE_INGREDIENT_BY_ID,
    DELETE_INGREDIENT_BY_ID,
} from '../types/index';
import * as tools from '../../utils/index';

const initialState = {
    number: 0,
    allIngredient: [],
    ingredient: {},
};

export default (state = initialState,action) => {
    switch (action.type){
        case FETCH_INGREDIENT:
            return {
                ...state,
                allIngredient: action.payload,
                number: action.payload.length,
            };
        case FETCH_INGREDIENT_BY_ID:
            return {
                ...state,
                ingredient: action.payload
            };
        case CREATE_INGREDIENT:
            return {
                ...state,
                ingredient: action.payload
            };
        case UPDATE_INGREDIENT_BY_ID:
            return {
                ...state,
                ingredient: action.payload
            };
        case DELETE_INGREDIENT_BY_ID:
            tools.successNotify(action.payload);
            return state;
        default:
            return state;
    }
}