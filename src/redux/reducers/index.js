import { combineReducers } from 'redux';

import herbReducer from './herbReducer';
import languageReducer from './languageReducer';

const rootReducers = combineReducers({
    lang: languageReducer,
    herbStore: herbReducer,
});

export default  rootReducers;
