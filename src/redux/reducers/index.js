import { combineReducers } from 'redux';

import herbReducer from './herbReducer';
import languageReducer from './languageReducer';
import imageReducer from './imageReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    herbStore: herbReducer,
    imageStore: imageReducer,
});

export default  rootReducers;
