"use client"

import { removeTodo, updateTodo } from "@/redux/todoSlice"
import { Todotype } from "@/type"
import { useState } from "react"
import { useDispatch} from "react-redux"



type Props={
    todo:Todotype
}


const TodoCard = ({todo}:Props) => {
    const [input,setInput]=useState<string>(todo.text||"");
    const [showUpdate,setShowUpdate]=useState(false);
    const dispatch = useDispatch()

  return (
    <div>
  <div className="flex gap-4" >
    <div className="relative">
       <div className="px-4 py-1 bg-gray-300 rounded-3xl min-w-xl ">

       {todo.text}
       </div>
    </div>
    <button className="py-2 px-6 bg-red-300 cursor-pointer" onClick={()=>{
      dispatch(removeTodo(todo.id))
   }}>
     X
    </button>
    <button className="bg-green-500 py-2 px-4 text-white" onClick={()=>{setShowUpdate(!showUpdate)}}>update text</button>
   </div>
   {
    showUpdate&&
    <div className="flex gap-4 mt-3">
    <input className=" bg-gray-200 rounded-full px-4 py-2 w-full" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
    <button className="bg-green-500 px-6 py-2 rounded-full text-white" onClick={()=>{
      dispatch(updateTodo({
        id:todo.id,
        text:input
      }));
      setShowUpdate(false)
    }}> Update</button>
    </div>
   }
 

    </div>
  
  )
}

export default TodoCard