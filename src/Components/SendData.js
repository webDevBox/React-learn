import React,{useState} from 'react'


function SendData() {
    const [id,setId]=useState('')
    
    const handleSubmit=()=>{
        console.log(id)
        
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            Headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
    },body:JSON.stringify(id)
        }).then((res)=>{
            console.log("result",res)
        })

    }
    return(
        <div>
            <div>
              <input type='text' name='id' value={id} onChange={(e)=>{setId(e.target.value)}} />
              </div>
             
              <button type='button' onClick={handleSubmit}>PostData</button>
        </div>
    );
}
export default SendData