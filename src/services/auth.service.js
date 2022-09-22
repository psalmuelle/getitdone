import axios from "axios";
import authHeader from "./auth-header";


const client = axios.create({
    baseURL: "http://erinle.pythonanywhere.com/api",
  
  })



const register=(data)=>{
    return (
        client
      .post("/register/", {
        username: data.username,
        email: data.email,
        password: data.password

      }).then((response)=>{        
        response.data?.user_info && localStorage.setItem("user", JSON.stringify(response.data.user_info))
        console.log(response)

        response.data?.token && localStorage.setItem("token", JSON.stringify(response.data.token))

      }).catch(err =>{
        console.log(err)
        alert(JSON.stringify(err.response.data))
      })
    )
}

const login=(data)=>{
 
    return (
        client
      .post("/login/", {
        username: data.username,
        password: data.password

      })
    )
}

const getUser=()=>{
return (
    client
    .get("/user/", {
        headers: authHeader()
    })
)
}

const logout=()=>{
    return (
        client
        .get("/logout/", {
            headers: authHeader()
        })
        .then(res=>{
            alert(res.data)
            localStorage.clear()
        })
        .catch((err)=>{
            console.log(err)
        })
    )
    }


export default {
    register,
    login,
    getUser,
    logout,
};