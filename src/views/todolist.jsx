import React, { useState } from "react";

const Todolist = ()=>{


const [tarea,setTarea]= useState({
    label: "",
    done:false,
});


const [listaTareas,setListaTareas]= useState([
  
        
]);


const borrarTarea = (id) =>{
let nuevalista= listaTareas.filter((item,index)=>id !== index)

setListaTareas(nuevalista)
}





const change=(event)=>{
console.log(event.target.value)
setTarea({
...tarea,
[event.target.name] : event.target.value
})    

}


const imprimirTarea = ({key})=>{
    if(key === "Enter"){
    if(tarea.label.trim() !== " " ){
     setListaTareas([
     ...listaTareas,
     tarea   
     ])   


     setTarea({
        label: "",
        done : false,
   
   
       })
    }
}

}

    return (

<div className="container">
<h1>Todos</h1>
<div className=" col-12 col-md-7 border ">
<input className="form-control" placeholder= "whats be to be done?" name="label" value={tarea.label} onChange={change} 
onKeyDown={imprimirTarea} ></input>
</div>
<div className="col-12 col-md-7 border ">
    {listaTareas.map((item,index) =>{
        return (
        <div key={index} className="border" onClick={()=>borrarTarea(index)}> {item.label}  </div>
        
        )
    })
}

{`${listaTareas.length} item list`}
</div>
</div>

    );
}


export default Todolist;