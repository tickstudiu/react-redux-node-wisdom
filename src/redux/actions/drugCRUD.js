import {
    FETCH_DRUG,
    FETCH_DRUG_BY_ID,
    FETCH_DRUG_ERROR,
    CREATE_DRUG,
    CREATE_DRUG_ERROR,
    UPDATE_DRUG,
    UPDATE_DRUG_ERROR,
    DELETE_DRUG,
    DELETE_DRUG_ERROR
} from '../types';
import {RootUrl} from '../../config';
import * as tools from "../../utils";

export const getDrugs = (callback) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/drug`);
    if (res.success) {
        await dispatch({
            type: FETCH_DRUG,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_DRUG_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const getDrugById = (callback, id) => async dispatch => {
    const res = await tools.getApi(`${RootUrl}/drug/${id}`);
    if (res.success) {
        await dispatch({
            type: FETCH_DRUG_BY_ID,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: FETCH_DRUG_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postDrug = (callback, data) => async dispatch => {
    const res = await tools.postImageApi(`${RootUrl}/drug`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_DRUG,
            payload: res.data.result,
            lastDrugID: res.data.result.drugID
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_DRUG_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const postMutiImageDrug = (callback, data) => async dispatch => {
    const res = await tools.postImageApi(`${RootUrl}/multipleDrugImage`, data);
    if (res.success) {
        await dispatch({
            type: CREATE_DRUG,
            payload: res.data.result,
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: CREATE_DRUG_ERROR,
            payload: res.error.data.messages,
        });
    }
};

export const putDrug = (callback, id, data) => async dispatch => {
    const res = await tools.putApi(`${RootUrl}/drug/${id}`, data);
    if (res.success) {
        await dispatch({
            type: UPDATE_DRUG,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: UPDATE_DRUG_ERROR,
            payload: res.error.data.messages,
        });
    }
};


export const delDrug = (callback, id) => async dispatch => {
    const res = await tools.deleteApi(`${RootUrl}/drug/${id}`);
    if (res.success) {
        await dispatch({
            type: DELETE_DRUG,
            payload: res.data.result
        });
        await callback();
    } else {
        console.log(res.error.data);
        await dispatch({
            type: DELETE_DRUG_ERROR,
            payload: res.error.data.messages,
        });
    }
};