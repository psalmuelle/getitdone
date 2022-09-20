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
        console.log(response.data)
        
        response.data?.user_info?.token && localStorage.setItem("user", JSON.stringify(response.data))

      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const login=(data)=>{
    return (
        client
      .post("/login/", {
        email: data.email,
        password: data.password

      }).then((response)=>{
        console.log(response.data)
        
        response.data?.user_info?.token && localStorage.setItem("user", JSON.stringify(response.data))

      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const getUser=()=>{
return (
    client
    .get("/user/", {
        headers: authHeader()
    })
    .then(res=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
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