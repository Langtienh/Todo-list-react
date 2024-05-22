import { combineReducers } from "redux";
import crudReducer from "./crudReducer";

export const allReducers = combineReducers({
    crudReducer,
}) 