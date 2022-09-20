import axios from "axios"
import authHeader from "./auth-header"

const client = axios.create({
    baseURL: "http://erinle.pythonanywhere.com/api",
  
  })


  const createNote=(data)=>{
    return (
        client
      .post("/note/create/", {
        

      }).then((response)=>{
        console.log(response.data)
        
        response.data?.user_info?.token && localStorage.setItem("user", JSON.stringify(response.data))

      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}