import { combineReducers } from "@reduxjs/toolkit"
import navigationReducer from "./navigationReducer"
import loadingReducer from "./loadingReducer"
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { exampleReducer } from "./exampleReducer";

const rootReducer = combineReducers({
    navigation: navigationReducer,
    loading: loadingReducer,
    user: userReducer,
    auth: authReducer,
    example: exampleReducer,
})

export default rootReducer;