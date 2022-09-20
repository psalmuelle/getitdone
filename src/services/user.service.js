import axios from "axios"
import authHeader from "./auth-header"

const client = axios.create({
    baseURL: "http://erinle.pythonanywhere.com/api",
  
  })


  const createNote=(data)=>{
    return (
        client
      .post("/note/create/", {
       title : data.title,
       note : data.note
      },
      {
        headers: authHeader()
      })
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}


const getNote=()=>{
    return (
        client
      .get("/note/get/", {
        headers: authHeader()
      })
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const createPlan=(data)=>{
    return (
        client
      .post("/plan/create/", {
       plan : data.plan
      },
      {
        headers: authHeader()
      })
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const getPlan=()=>{
    return (
        client
      .get("/plan/get/", {
        headers: authHeader()
      })
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}


const deletePlan=(id)=>{
    return (
        client
        .delete(`/plan/delete/${id}`)
    )
}


const createTodo=(data)=>{
    return (
        client
      .post("/todo/create/", {
       title: data.title,
       description: data.description,
       deadline: data.deadline
      },
      {
        headers: authHeader()
      })
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const getTodo=()=>{
    return (
        client
      .get("/todo/get/", {
        headers: authHeader()
      })
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const createTodoList=(data, todoId)=>{
    return (
        client
      .post("/todolist/create/", {
       list: data.list,
       todoid: todoId
      })
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const getTodoList=(id)=>{
    return (
        client
      .get(`/todolist/get/${id}/`)
      .then((response)=>{
        console.log(response.data)
      }).catch(err =>{
        console.log(err)
        alert(err)
      })
    )
}

const updateTodoList=(data, id)=>{
    return (
      client
      .put(`/todolist/update/${id}/`,{
        completed: data.completed
      })
      .then((res)=>{
        console.log(res)
      })
    )
}


export default {
  createTodo,
  createNote,
  createPlan,
  createTodoList,
  getNote,
  getPlan,
  getTodo,
  getTodoList,
  deletePlan,
  updateTodoList
}