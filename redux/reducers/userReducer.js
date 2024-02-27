import { createSlice } from "@reduxjs/toolkit";
import { SET_USER, CLEAR_USER } from "../actions/userActions";

const initialState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        [SET_USER]: (state, action) =>  {
            state.user = action.payload;
        },
        [CLEAR_USER]: (state) => {
            state.user = null;
        },
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;