import {
    FETCH_ACTIVITY,
    FETCH_ACTIVITY_BY_ID,
    FETCH_ACTIVITY_ERROR,
    CREATE_ACTIVITY,
    CREATE_ACTIVITY_ERROR,
    CREATE_ACTIVITY_MUTI_IMAGE,
    CREATE_ACTIVITY_MUTI_IMAGE_ERROR,
    UPDATE_ACTIVITY,
    UPDATE_ACTIVITY_ERROR,
    DELETE_ACTIVITY,
    DELETE_ACTIVITY_ERROR
} from '../types';
import {RootUrl} from '../../config';
import * as tools from "../../utils";

export const getActivities = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/event`);
    if (res.success) {
        await dispatch({
            type: FETCH_ACTIVITY,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_ACTIVITY_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getActivityById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/event/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_ACTIVITY_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_ACTIVITY_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postActivity = (callback, data) => async dispatch => {
    const res = await tools.postImageApi(`${RootUrl}/event`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_ACTIVITY,
            payload: res.data.result,
            lastActivityID: res.data.result.eventID
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_ACTIVITY_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postMutiImageActivity = (callback, data) => async dispatch => {
    const res = await tools.postImageApi(`${RootUrl}/multipleEventImage`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_ACTIVITY_MUTI_IMAGE,
            payload: res.data.result,
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_ACTIVITY_MUTI_IMAGE_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putActivity = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/event/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_ACTIVITY,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_ACTIVITY_ERROR,
            payload: res.error.data.messages,
        });
    }
};


export const delActivity = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/event/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_ACTIVITY,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_ACTIVITY_ERROR,
            payload: res.error.data.messages,
        });
    }
};