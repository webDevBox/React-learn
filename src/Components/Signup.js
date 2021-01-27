import axios from 'axios'
import React,{useState,useEffect} from 'react'


function PostData() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmit=()=>{
        console.log({name,email,password})
        let data={name,email,password}
        fetch("http://2e8cc01927fc.ngrok.io/user/signup",{
            method:"POST",
            Headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
    },body:JSON.stringify(data)
        }).then((res)=>{
            console.log("result",res)
        })

    }

    return (
      <div>
          
              <div>
              <input type='text' name='userId' value={name} onChange={(e)=>{setname(e.target.value)}} />
              </div>
              <div>
              <input type='text' name='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
              </div>
              <div>
              <input type='text' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
              </div>
             
              <button type='button' onClick={handleSubmit}>PostData</button>
              
      </div>
    );
  }
  
  export default PostData;