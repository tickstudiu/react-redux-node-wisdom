import { combineReducers } from 'redux';

import herbReducer from './herbReducer';
import languageReducer from './languageReducer';
import imageReducer from './imageReducer';
import benefitReducer from './benefitReducer';
import drugReducer from './drugReducer';
import activityReducer from './activityReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    herbStore: herbReducer,
    imageStore: imageReducer,
    benefitStore: benefitReducer,
    drugStore: drugReducer,
    activityStore: activityReducer,
});

export default  rootReducers;
