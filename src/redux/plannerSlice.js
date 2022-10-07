import { createSlice } from "@reduxjs/toolkit";


export const PlannerSlice = createSlice({
    name: "planner",
    initialState: {
        changes: 0

    },
    reducers: {
        updatePlanner: (state)=>{
    
        return (
            {...state, changes: state.changes +1}
        )
      
        }
        
    }
})


export const {updatePlanner} = PlannerSlice.actions

export default PlannerSlice.reducer