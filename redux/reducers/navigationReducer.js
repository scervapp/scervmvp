import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    showWelcomePage: true,
    userType: null,
}

const navigationSlice = createSlice({
    name: 'navigation', // Name for your slice state
    initialState,
    reducers: {
        setWelcomePage(state, action){
            state.welcomePage = action.payload;
        },
        setUserType(state, action){
            state.userType = action.payload;
        }
    }
})

export const { setWelcomePage, setUserType } = navigationSlice.actions;
export default navigationSlice.reducer;