import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    showWelcomePage: true,
    userRole: null,
}

const navigationSlice = createSlice({
    name: 'navigation', // Name for your slice state
    initialState,
    reducers: {
        setWelcomePage(state, action){
            state.welcomePage = action.payload;
        },
        setUserRole(state, action){
            state.userRole = action.payload;
        }
    }
})

export const { setWelcomePage, setUserRole } = navigationSlice.actions;
export default navigationSlice.reducer;