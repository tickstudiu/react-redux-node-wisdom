import {
    FETCH_HERB,
    FETCH_HERB_BY_ID,
    FETCH_HERB_ERROR,
    CREATE_HERB,
    CREATE_HERB_ERROR,
    UPDATE_HERB,
    UPDATE_HERB_ERROR,
    DELETE_HERB,
    DELETE_HERB_ERROR,
    CREATE_HERB_MUTI_IMAGE,
    CREATE_HERB_MUTI_IMAGE_ERROR
} from '../types';
import {RootUrl} from '../../config';
import * as tools from "../../utils";

export const getHerbs = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/herb`);
    if (res.success) {
        await dispatch({
            type: FETCH_HERB,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_HERB_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getHerbById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/herb/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_HERB_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_HERB_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postHerb = (callback, data) => async dispatch => {
    const res = await tools.postApi(`${RootUrl}/herb`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_HERB,
            payload: res.data.result,
            lastHerbID: res.data.result.herbID
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_HERB_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postMutiImageHerb = (callback, data) => async dispatch => {
    const res = await tools.postImageApi(`${RootUrl}/multipleHerbImage`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_HERB_MUTI_IMAGE,
            payload: res.data.result,
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_HERB_MUTI_IMAGE_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putHerb = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/herb/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_HERB,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_HERB_ERROR,
            payload: res.error.data.messages,
        });
    }
};


export const delHerb = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/herb/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_HERB,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_HERB_ERROR,
            payload: res.error.data.messages,
        });
    }
};