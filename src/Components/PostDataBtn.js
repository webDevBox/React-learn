import React, { useState } from 'react'
import axios from 'axios'

function PostDataBtn() {
    const [user,updateUser]=useState({
        title:'',
        id:'',
        userId:''})
    const handleClick=()=>{
        const url='https://jsonplaceholder.typicode.com/todos/3'
        axios.get(url)
        .then((response)=>{
            console.log(response)
            updateUser(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const postClick=()=>{
        const url='http://localhost:5000/api/v1/user'
        axios.post(url,user)
        .then((response)=>{
            console.log(response.data)
            
        })
    }
    return (
      <div>
          <div>
          <button onClick={handleClick}>GetData</button>
          </div>
          <button onClick={postClick}>PostData</button>
          {/* <div> */}
          {/* <input type='text' name='title' value={user.title} onChange={e=>updateUser(e.target.value)} ></input>
          </div>
          <div>
          <input type='text' name='id' value={user.id} onChange={e=>updateUser(e.target.value)} ></input>
          </div>
          <div>
          <input type='text' name='userId' value={user.userId} onChange={e=>updateUser(e.target.value)} ></input>
          </div> */}
          <div>{user.id}</div>
          <div>{user.userId}</div>
          <div>{user.title}</div>
      </div>
    );
  }
  
  export default PostDataBtn;