import React from "react";
import { useContext } from "react";
import { Context } from "./Context/TodoContext";

function Form(){
    const {todo, setTodo}= useContext(Context)
    const handleDelete = (elem) =>{
        let copy = todo.filter(ele=> ele.id !== elem)
        setTodo(copy)
    }
    const deleteAll=() => {
        setTodo([])
    }
    return(
        <div className="data">

        <table>
            <thead>
                
            </thead>
      <tbody>
        {
            todo.map((element, index) =>(
                <tr key={index}> 
                <th> {element.id} </th>
                <td>
                    {element.todo}
                </td>
                <td>
                    <button onClick={()=> handleDelete(element.id)}> Delete </button>
                </td>

                </tr>
            ) )
        }
</tbody>
  </table>
  <button onClick={deleteAll}> Delete All</button>
        </div>
    )
}

export default Form 