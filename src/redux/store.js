import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import todoReducer from "./todoSlice"

export const rootReducers = combineReducers({
    user: userReducer,
    todoId: todoReducer

})



export default configureStore(
  {reducer:rootReducers}
)