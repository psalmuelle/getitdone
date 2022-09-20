import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "user",
    initialState: {
        token: null,

    },
    reducers: {
        Authenticated: (state) =>{
            state.token = localStorage.getItem("token")
        },
        NotAuthenticated: (state)=>{
            state.token = null
        }
    }
})