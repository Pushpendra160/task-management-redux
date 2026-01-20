
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
   <div className="flex flex-col justify-start items-center py-20 w-screen min-h-screen bg-green-100">
            <TodoForm/>
            <hr className="bg-gray-600 w-[90%] h-[2px] my-5"/>
            <TodoList/>
   </div>
  );
}
