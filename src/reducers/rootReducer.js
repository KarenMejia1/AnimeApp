import { combineReducers } from "redux";
import { animesReducer } from "./animesReducer";
import { authReducer } from "./authReducer";
import { uiReducer } from "./uiReducers";


export const rootReducer = combineReducers({
    ui:uiReducer,
    animes: animesReducer,
    auth: authReducer
})