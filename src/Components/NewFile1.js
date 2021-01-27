import React, { useState } from 'react'

function NewFile() {
    const [data,setData]=useState([
        {
         name :"Aoun abbas",
         id:1
        },
        {
            name :"Ali abbas",
            id:1
           },
           {
            name :"Hassnain",
            id:1
           },
           {
            name :"Mueez",
            id:1
           }
       
        
    ])
    
    const [selectedId,setSelectedId]=useState()
    // const [bool,setbool]=useState(false)
    // const clickHandler=(()=>{
    //     setbool(!bool)
    // })
    return (
      <div>
        {
          data.map((item,index)=>(
            <div>
            <h1 
             onClick={()=>{setSelectedId(index)}} >{item.name}</h1>
          
            </div>
          ))
}

<h1> index of selected name:{selectedId}</h1>
      </div>
    );
  }
  
  export default NewFile;