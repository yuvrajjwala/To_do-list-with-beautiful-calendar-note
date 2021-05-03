import React from 'react'
import {Listvalues} from "./Listvalues";
import "./todo.css"


export const List = (props) => {
   return (
   <div className="Todo">
         <h3 className="head"><u>Your To-do</u></h3>
         {/* Now we will render our all todolist using for loop or map() function */}
         {props.todoslist.length===0?<h5 className="text-danger">No List to Display! </h5>:
         props.todoslist.map((todo)=>{
            return <Listvalues todo={todo} key={todo.Work} onDeletefun={props.onDeletefun} completed={props.completed} />
         })}
         
            
        
    
         
      </div>
   )
}
