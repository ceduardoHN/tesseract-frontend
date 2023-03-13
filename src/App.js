import "./App.css";
import React,{useState,useEffect} from "react";
import TodoList from "./components/TodoList";
// import Lista from "./components/Lista";
// import CrearRegistro from "./components/CrearRegistro";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}
// function App(){
//   const [data,setData]=useState([]);
//   const llamarLista=async()=>{
//       const respuesta=await fetch("http://localhost:3000/v1/to-dos");
//       const respuestaJson=await respuesta.json();
//       setData(respuestaJson.todos);
//   };

//   useEffect(()=>{
//       llamarLista();
//   },[]);

//   return(
//     <>
//       <button onClick={()=>setData([])}>Limpiar Registro</button>
//       <CrearRegistro llamarLista={llamarLista}></CrearRegistro>
//       <Lista data={data} llamarLista={llamarLista}></Lista>
//     </>
//   );
// }

export default App;
