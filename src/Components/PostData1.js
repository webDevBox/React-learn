import React, { useState } from 'react'

function PostData1() {
    const [formdata,setFormdata]=useState({})
    const handleChange=(event)=>{
        setFormdata({...formdata,[event.target.name]:event.target.value})
    }
    const eventHandler=()=>{
        fetch('https://localhost:4000/todo',{
            method:'POST',
            body:JSON.stringify(formdata),
        })
        .then((response)=>{
            response.json()})
            .then((result)=>{
                console.log(result)
                setFormdata('')
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    return (
      <div>
          <form>
              <div>
              <input name="Name" value={formdata.Name } onChange={handleChange}  ></input>
              </div>
              <div>
              <input name="Email" value={formdata.Email} onChange={handleChange}  ></input>
              </div>
              <div>
              <input name="Password" value={formdata.Password} onChange={handleChange}  ></input>
              </div>
              <button onClick={eventHandler} >clickIt</button>
              
          </form>

      </div>
    );
  }
  
  export default PostData1;