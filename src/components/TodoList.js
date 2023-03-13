import React, {useState,useEffect} from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const GET=async()=>{
    const respuesta=await fetch("http://localhost:3000/v1/to-dos");
    const respuestaJson=await respuesta.json();
    setTodos(respuestaJson.todos);
  };

  const POST=async(todo)=>{
    const respuesta=await fetch("http://localhost:3000/v1/to-do",{
      method:"POST",
      body:JSON.stringify(todo),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const respuestaJson=await respuesta.json();
  };

  const DELETE=async(id)=>{
    const respuesta=await fetch(`http://localhost:3000/v1/to-do/${id}`,{
      method:"DELETE"
    });
    const respuestaJson=await respuesta.json();
  };

  const UPDATE=async(todoId,newValue)=>{
    const todo={
      id:todoId,
      text:newValue.text,
      description:newValue.description,
      is_done:newValue.is_done
    };
    const respuesta=await fetch(`http://localhost:3000/v1/to-do/${todoId}`,{
      method:"PUT",
      body:JSON.stringify(todo),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const respuestaJson=await respuesta.json();
  }

  const getToDos=async()=>{
    const respuesta=await fetch("http://localhost:3000/v1/to-dos");
    const respuestaJson=await respuesta.json();
    setTodos(respuestaJson);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  useEffect(() => {
    GET();
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    POST(todo);
    //const respuestaJson=await respuesta.json();
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const showDescription = (todoId) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.showDescription = !todo.showDescription;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    
    UPDATE(todoId,newValue);

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = async(id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    DELETE(id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        showDescription={showDescription}
      />
    </>
  );
}

export default TodoList;
