import React,{useState} from "react";

const CrearRegistro=({llamarLista})=>{
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    const crearNuevoRegistro=async()=>{
        const respuesta=await fetch("http://localhost:3000/v1/to-do",{
            method:"POST",
            body:JSON.stringify({title,description}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const respuestaJson=await respuesta.json();
        //setData(respuestaJson.todos);
        llamarLista();
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        //const respuesta=await fetch("http://localhost:3000/v1/to-dos");
        crearNuevoRegistro();
    };

    const handleChangeTitle=(e)=>{
        setTitle(e.target.value);
    };
    
    const handleChangeDescription=(e)=>{
        setDescription(e.target.value);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="title" value={title} onChange={handleChangeTitle}></input>
            <input type="text" name="description" value={description} onChange={handleChangeDescription}></input>
            <button>CREAR</button>
        </form>
    )
};

export default CrearRegistro;