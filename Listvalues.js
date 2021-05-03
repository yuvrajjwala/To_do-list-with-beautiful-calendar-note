import React from 'react'


export const Listvalues = ({ todo, onDeletefun, completed }) => {
   return (
      <div>
         <h4 className="text-light">{todo.Title}</h4>
         <p className="text-light">{todo.todo}</p>

         {/* <div class="form-check text-light">
  <input class="form-check-input bg-success" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label " for="flexCheckDefault">
    Mark as Done
  </label>
</div>
<br></br> */}
         <button className="btn btn-sm btn-danger text-light" onClick={() => { onDeletefun(todo) }}>Delete</button>

         <input className="btn btn-sm btn-success text-light mx-3" onClick={() => { completed(todo) }} type="button" value="Mark as done" id="myButton1"></input>


         <br></br><br></br><br></br>
      </div>
   )
}
