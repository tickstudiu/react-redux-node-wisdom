import { combineReducers } from 'redux';

import herbReducer from './herbReducer';
import languageReducer from './languageReducer';
import imageReducer from './imageReducer';
import benefitReducer from './benefitReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    herbStore: herbReducer,
    imageStore: imageReducer,
    benefitStore: benefitReducer,
});

export default  rootReducers;
