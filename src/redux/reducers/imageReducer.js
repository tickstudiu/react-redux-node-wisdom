import {
    FETCH_IMAGE,
    FETCH_IMAGE_BY_ID,
    CREATE_IMAGE,
    DELETE_IMAGE_BY_ID,
    UPDATE_IMAGE_BY_ID,
} from '../types';
import * as tools from '../../utils/';

const initialState = {
    images: [],
    image: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE:
            return {
                ...state,
                images: action.payload,
            };
        case FETCH_IMAGE_BY_ID:
            return {
                ...state,
                image: action.payload,
            };
        case CREATE_IMAGE:
            return {
                ...state,
                image: action.payload,
            };
        case DELETE_IMAGE_BY_ID:
            return {
                ...state,
                images: action.payload,
            };
        case UPDATE_IMAGE_BY_ID:
            tools.successNotify(action.payload);
            return state;
        default:
            return state;
    }
}