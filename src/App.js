import React, {useState} from "react";
import './App.css';

//importing components

import Form from "./Components/Form"
import ToDoList from "./Components/TodoLIst";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
       
      <header>This is utsho List  </header>
      <Form inputText={inputText} todos={todos}  setTodos= {setTodos} setInputText ={setInputText} ></Form>
      <ToDoList setTodos={setTodos} todos={todos} ></ToDoList>
     
    </div>
  );  
}

export default App; 
