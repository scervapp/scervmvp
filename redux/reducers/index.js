import { combineReducers } from "@reduxjs/toolkit"
import navigationReducer from "./navigationReducer"

const rootReducer = combineReducers({
    navigation: navigationReducer,
})

export default rootReducer;