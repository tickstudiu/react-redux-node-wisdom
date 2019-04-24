import { CHANG_LANGUAGE } from '../types';

export * from './herbCRUD';
export * from './imageCRUD';
export * from './benefitCRUD';
export * from './drugCRUD';

export const changeLanguage = lang => dispatch => {
    dispatch({
        type: CHANG_LANGUAGE,
        payload: lang
    });
};
