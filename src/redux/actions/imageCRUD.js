import {
    FETCH_IMAGE,
    FETCH_IMAGE_BY_ID,
    CREATE_IMAGE,
    DELETE_IMAGE_BY_ID,
    UPDATE_IMAGE_BY_ID,
    FETCH_IMAGE_ERROR,
    CREATE_IMAGE_ERROR,
    DELETE_IMAGE_BY_ID_ERROR,
    UPDATE_IMAGE_BY_ID_ERROR,
} from '../types';
import { RootUrl } from '../../config';
import * as tools from "../../utils";

export const getImages = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/image`);
    if (res.success) {
        await dispatch({
            type: FETCH_IMAGE,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_IMAGE_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getImageById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/image/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_IMAGE_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_IMAGE_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postImage = (callback, data) => async dispatch => {
    const res = await tools.postImageApi(`${RootUrl}/image`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_IMAGE,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_IMAGE_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putImageById = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/image/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_IMAGE_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_IMAGE_BY_ID_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const delImageById = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/image/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_IMAGE_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_IMAGE_BY_ID_ERROR,
            payload: res.error.data.messages,
        });
    }
};