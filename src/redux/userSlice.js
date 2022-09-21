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
                console.log(res)
            })
            state.user_data = JSON.parse(localStorage.getItem("user")) 
            state.token =JSON.parse(localStorage.getItem("token"))
            state.authenticated= true
            state.NotAuthenticated= false

        }
        
    }
})


export const {checkAuthentication} = userSlice.actions

export default userSlice.reducer