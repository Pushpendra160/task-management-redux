"use client"
import {  useSelector} from "react-redux"
import { RootState } from "@/redux/store";
import TodoCard from "./TodoCard";
import { useEffect } from "react";
const TodoList = () => {
    const todos = useSelector((state:RootState)=>state.todos);

  return (
       <div className="flex flex-col gap-4">
         {
              todos.map((todo)=>(
                <TodoCard  key={todo.id} todo={todo}/>
              ))
         }
      </div>
  )
}

export default TodoList