import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service"
export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null,
        user_data: {},
        authenticated: false,
        NotAuthenticated: true

    },
    reducers: {
        checkAuthentication: (state)=>{
            AuthService.getUser().then((res)=>{
                state.token = localStorage.getItem("token")
                state.user_data = res.data.user_data
                state.authenticated= true
                state.NotAuthenticated= false
            }).catch((err)=>{
                state.token = null
                state.user_data = err.response.data
                state.authenticated= false
                state.NotAuthenticated= true
            })

        }
        
    }
})


export const {checkAuthentication} = userSlice.actions

export default userSlice.reducer