import { createContext, useState } from "react";

 export const Context=createContext();
 const TodoProvider=({children})=>{


        const [todo, setTodo]=useState([])
       
      
        const data={
          todo, setTodo
        }

        return(
            <Context.Provider value={data}>{children}</Context.Provider>
        );
 }

  

 export default TodoProvider 