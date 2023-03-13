import React,{useState,useEffect} from "react";

const Lista=({data,llamarLista})=>{
    

    return (
        <div>
            {data.map((item)=>{
                const borrarRegistro=async()=>{
                    await fetch(`http://localhost:3000/v1/to-do/${item.id}`,{
                        method:"DELETE",
                    });
                    llamarLista();
                };
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button onClick={borrarRegistro}>X</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Lista;