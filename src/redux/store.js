import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import todoReducer from "./todoSlice"
import plannerReducer from "./plannerSlice"

export const rootReducers = combineReducers({
    user: userReducer,
    todoId: todoReducer,
    planner: plannerReducer

})



export default configureStore(
  {reducer:rootReducers}
)