"use client"

import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
  const dispatch = useDispatch();

  const [input,setInput]=useState<string>("");



  const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        // setTask((prev)=>[...prev,input])
        const todo = {
          id: uuidv4(),
          text:input
        }
        dispatch(addTodo(todo));
       setInput("")
  }
  return (
    <>
  
    <form onSubmit={handleSubmit} className="flex gap-4 w-full justify-center items-center">
        <div>
          
        <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="Add to do content" className="px-10 py-2 w-lg border border-gray-500 rounded-full placeholder:text-gray-400 text-black"/>
        </div>

        <div className="">
           <button type="submit" className="bg-green-400 px-6 py-2 text-center text-white rounded-full  ">Add TODO</button>
        </div>
       </form> 
       {

    }
    </>
  )
}

export default TodoForm