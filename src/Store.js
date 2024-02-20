import { combineReducers, legacy_createStore } from "redux";
import RegisterReducer from "./Reducers/RegistrationReducer";

const store =legacy_createStore(combineReducers({keytoAccess:RegisterReducer}));
export default store;