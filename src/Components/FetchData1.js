import axios from 'axios'
import React, { useState } from 'react'

function FetchData1() {
    
    const [user,updateUser]=useState({})
    const [id,setId]=useState(1)

    const handleClick=()=>{
        const url=`https://reqres.in/api/products/${id}`
        axios.get(url)
        .then((response)=>{
            console.log("hello ",response.data.data)
            updateUser(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
      <div>
          <div>
          <input type='text' value={id} onChange={e=>{setId(e.target.value)}} ></input>
          </div>
          <button onClick={handleClick} >FetchData</button>
          <div>{user.id}</div>
          <div>{user.color}</div>
          <div>{user.year}</div>
          <div>{user.name}</div>
          <div>{user.pantone_value}</div>
      </div>
    );
  }
  
  export default FetchData1;