import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    //Reducers gives a function that changes the user state
    reducers: {
        setLogin: (state, action) => {
            console.log(state, action)
            state.user = action.payload
        },
        setLogout: (state, action) => {
            state.user = null
        }
    }
});

export const { setLogin, setLogout } = userSlice.actions; 
export default userSlice.reducer;
