import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    user: null,
    idToken: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload
        },
        setAuthenticatedUser(state, action) {
            state.user = action.payload;
        },
        setIdToken(state, action) {
            console.log("Setting idToken", action.payload)
            state.idToken = action.payload;
        }
    }
})

export const { setIsLoggedIn, setAuthenticatedUser, setIdToken } = authSlice.actions;
export default authSlice.reducer;