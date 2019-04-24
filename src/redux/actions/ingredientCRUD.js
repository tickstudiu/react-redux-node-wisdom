import {
    FETCH_INGREDIENT,
    FETCH_INGREDIENT_BY_ID,
    CREATE_INGREDIENT,
    DELETE_INGREDIENT_BY_ID,
    UPDATE_INGREDIENT_BY_ID,
    FETCH_INGREDIENT_ERROR,
    CREATE_INGREDIENT_ERROR,
    DELETE_INGREDIENT_BY_ID_ERROR,
    UPDATE_INGREDIENT_BY_ID_ERROR,
} from '../types/index';
import { RootUrl } from '../../config';
import * as tools from "../../utils";

export const getIngredients = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/ingredient`);
    if (res.success) {
        await dispatch({
            type: FETCH_INGREDIENT,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_INGREDIENT_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getIngredientById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/ingredient/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_INGREDIENT_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_INGREDIENT_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postIngredient = (callback, data) => async dispatch => {
    const res = await tools.postApi(`${RootUrl}/ingredient`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_INGREDIENT,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_INGREDIENT_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putIngredientById = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/ingredient/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_INGREDIENT_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_INGREDIENT_BY_ID_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const delIngredientById = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/ingredient/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_INGREDIENT_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_INGREDIENT_BY_ID_ERROR,
            payload: res.error.data.messages,
        });
    }
};