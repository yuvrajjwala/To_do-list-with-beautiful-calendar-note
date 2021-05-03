import logo from './logo.svg';
import './App.css';
import { Header } from "./Header";
import { List } from "./List";
import { Footer } from "./Footer";
import { Listadd } from "./Listadd";
import React, { useState, useEffect } from 'react';
import {Navc} from "./Navc";
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Listvalues } from "./Listvalues";


function App() {
  let intialtodo;
  if (localStorage.getItem("todoslist") === null) {
    intialtodo = [];

  }
  else {
    intialtodo = JSON.parse(localStorage.getItem("todoslist"))
  }

  const completed = (todo) => {
    console.log("This is todo", todo.Work);

    // alert("This will marke as done !");
    document.getElementById("myButton1").value = "Done ✓"

    // let element = document.getElementById('mybutton1')
    // element.target.style.color = 'black'
    // ReactDOM.findDOMNode(element).style.backgroundColor = this.state.isClicked?'black' : 'white'

  }






  const onDeletefun = (todo) => {
    alert("Your to-do item will be deleted")
    settodslist(todoslist.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }



  const Listaddto = (title, work) => {
    let len;
    if (todoslist.length == 0) {
      len = 0;
    }
    else {
      let len = todoslist[todoslist.length - 1].Work + 1;
    }
    const toaddtodo = {
      Work: len,
      Title: title,
      todo: work,

    }
    settodslist([...todoslist, toaddtodo]);
    console.log(toaddtodo);



  }

  const [todoslist, settodslist] = useState(intialtodo);
  useEffect(() => {
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }, [todoslist])

  return (
    <>
      <Router>
      <Header title="To-Do list" />
        <Switch>
          <Route exact path="/" render={() => {
            
              return(
                <>
              
              <Listadd Listaddto={Listaddto} />
              <List todoslist={todoslist} onDeletefun={onDeletefun} completed={completed} />
            </>)
          }}>
            
          </Route>
          <Route exact path="/calender">
            <Navc />
          </Route>
        </Switch>

        <Footer />
      </Router>


    </>
  );
}

export default App;
