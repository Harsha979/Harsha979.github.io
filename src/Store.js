/* import {combineReducers, legacy_createStore } from "redux";
import valuesReducer from './Reducers/valuesReducer';

const store =legacy_createStore(combineReducers({valuesReducer:valuesReducer}));
export default store; */

import { combineReducers, legacy_createStore } from "redux";
import RegisterReducer from "./Reducers/RegistrationReducer";
import Values from "./Reducers/NewReducer";

const store =legacy_createStore(combineReducers({keytoAccess:RegisterReducer}));
export default store;