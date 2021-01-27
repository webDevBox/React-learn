import React, { useState } from 'react'

function NewFile2() {
    const [data,setData]=useState([
        {
         name :"Aoun abbas",
         id:1
        },
        {
            name :"Ali abbas",
            id:2
           },
           {
            name :"Owais",
            id:3
           },
           {
            name :"Mueez",
            id:4
           },
       
        
    ])
    
    const [selectedId,setSelectedId]=useState()
    const [bool,setbool]=useState(false)
    const clickHandler=(()=>{
        setbool(!bool)
    })


    const styleObj = {
     
        color: "#4a54f1",
       
    }
    return (
      <div>
        {
          data.map((item,index)=>(
              <div>

            {
              
                selectedId == index ? 
                <div style={styleObj}>
                <h1 
                 onClick={()=>{setSelectedId(index)}} >{item.name}</h1>
              
                </div>
                :
                <div>
                <h1 
                 onClick={()=>{setSelectedId(index)}} >{item.name}</h1>
              
                </div>
               

            }
            </div>
           
          ))
}

<h1> index of selected name :{selectedId}</h1>
      </div>
    );
  }
  
  export default NewFile2;