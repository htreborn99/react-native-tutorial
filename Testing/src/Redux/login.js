import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: "",
    profile_name : "",
    inventory:""
}

export const login_detail_slice = createSlice({
    name: "login_data",
    initialState,
    reducers: {
        setlogin: (state, action) => {
            state.login = action.payload
        },
        set_profile_name: (state, action) => {
            state.profile_name = action.payload
        },
        set_inventory: (state, action) => {
            state.inventory = action.payload
        }
    }
})

export const { setlogin, set_profile_name, set_inventory } = login_detail_slice.actions;

export default login_detail_slice.reducer
