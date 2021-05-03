import React, { useState } from 'react';
import "./form.css"



export const Listadd = ({Listaddto}) => { 
  const [title,setTitle]=useState("");
  const [work,setWork]=useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title||!work){
      alert("You have to fill both Title and Work")
    }
    else{
         Listaddto(title,work);
         setTitle("");
         setWork("");
    }

  }
   return (
      <div className="container">
         
        <form className="form" onSubmit={submit}>
           <h3 className="text-warning">Add Your To-Do</h3>
  <div className="mb-3">
    <label htmlFor="title" className="form-label text-light">Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    <div id="txt" className="form-text">To-do list gives you a sense of accomplishment and progress</div>
  </div>
  <div className="mb-3">
    <label htmlFor="work" className="form-label text-light">Work</label>
    <input type="text" value={work} onChange={(e)=>{setWork(e.target.value)}} className="form-control" id="work"/><br></br>
  </div>
  <button type="submit"  className="btn btn-dark text-warning">Add</button>
</form>
      </div>
   )
}
