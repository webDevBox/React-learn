import axios from 'axios'
import React, { useState } from 'react'

function CurrencyConvert() {
    const [convert,setConvert]=useState()
    const [first,setFirst]=useState()
    const [id,setId]=useState()
    var a=0
    const handleChange=(event)=>{
        setFirst(event.target.value)
    }
    const handleClick=()=>{
        const url='https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=7b0d039ba7b0583ccaba'
        axios.get(url)
        .then((response)=>{
            console.log(first/response.data.USD_PHP)
            setFirst(first/response.data.USD_PHP)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    return (
      <div>
          <input type='text' onChange={handleChange} placeholder='Enter currency' value={convert}  ></input>
        <button onClick={handleClick} >InrToDoller</button>
        <div>{first}$</div>
      </div>
    );
  }
  
  export default CurrencyConvert;