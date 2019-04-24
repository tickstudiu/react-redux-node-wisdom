import {
    FETCH_BENEFIT,
    FETCH_BENEFIT_BY_ID,
    CREATE_BENEFIT,
    DELETE_BENEFIT_BY_ID,
    UPDATE_BENEFIT_BY_ID,
    FETCH_BENEFIT_ERROR,
    CREATE_BENEFIT_ERROR,
    DELETE_BENEFIT_BY_ID_ERROR,
    UPDATE_BENEFIT_BY_ID_ERROR,
} from '../types/index';
import { RootUrl } from '../../config';
import * as tools from "../../utils";

export const getBenefits = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/benefit`);
    if (res.success) {
        await dispatch({
            type: FETCH_BENEFIT,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_BENEFIT_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getBenefitById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/benefit/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_BENEFIT_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_BENEFIT_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postBenefit = (callback, data) => async dispatch => {
    const res = await tools.postApi(`${RootUrl}/benefit`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_BENEFIT,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_BENEFIT_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putBenefitById = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/benefit/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_BENEFIT_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_BENEFIT_BY_ID_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const delBenefitById = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/benefit/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_BENEFIT_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_BENEFIT_BY_ID_ERROR,
            payload: res.error.data.messages,
        });
    }
};