import { configureStore } from "@reduxjs/toolkit";

import rootReducer from './reducers'
import { composeWithDevTools } from "redux-devtools-extension";


const store = configureStore({
    reducer: rootReducer,
}, composeWithDevTools());

export default store
