// reducers/exampleReducer.js

import { MARK_AS_READ } from "../actions/exampleActions";



const initialState = {
    readStatus: false
}

export const exampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case MARK_AS_READ:
            return {
                ...state,
                readStatus: true
            }
        default:
            return state;
    }
}