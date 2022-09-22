import { createSlice } from "@reduxjs/toolkit";


export const TodoIdSlice = createSlice({
    name: "todo",
    initialState: {
        todoId: null

    },
    reducers: {
        setTodoId: (state, actions)=>{
    
        return (
            {...state, todoId: actions.payload}
        )
      
        }
        
    }
})


export const {setTodoId} = TodoIdSlice.actions

export default TodoIdSlice.reducer