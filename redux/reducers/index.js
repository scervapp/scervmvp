import { combineReducers } from "@reduxjs/toolkit"
import navigationReducer from "./navigationReducer"
import loadingReducer from "./loadingReducer"

const rootReducer = combineReducers({
    navigation: navigationReducer,
    loading: loadingReducer,
})

export default rootReducer;