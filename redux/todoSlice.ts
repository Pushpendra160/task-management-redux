import { Todotype } from "@/type";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    todos:[] as Todotype[]
}
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
    addTodo:(state,action)=>{
         const todo = {
            id:action.payload.id,
            text:action.payload.text
         }
         state.todos.push(todo);
    },
    removeTodo:(state,action)=>{
           state.todos= state.todos.filter((todo)=>(
                todo.id!==action.payload
            ))
    },
    updateTodo:(state,action)=>{
           const todo = state.todos.find(t=>t.id===action.payload.id);
           if(todo)
           {
               todo.text= action.payload.text;
           }
 }
    }
})

export const {addTodo,removeTodo,updateTodo}= todoSlice.actions 
export const todoReducers= todoSlice.reducer;