import React, { useState } from 'react'

function FetchData3() {
const [posts,setPosts]=useState({})
  const [data,setData]=useState(false)
  const clickHandler=((e)=>{
     {setPosts({...posts,[e.target.name]:e.target.value})}
    // setPosts(e.target.value)
    
  })
  const clickit=()=>{
    setData(true)
  }
    return (
      <div>
        <button onClick={clickit}>PrintNames</button>
        <div>
        <input type='text' name='firstname'  value={posts.firstname} onChange={clickHandler} ></input>
        </div>
        <div>
        <input type='text' name='lastname'  value={posts.lastname} onChange={clickHandler} ></input>
        </div>
        {
          data?
          <div>
        <div>{posts.firstname}</div>
        <div>{posts.lastname}</div>
        </div>
        :false
}
      </div>
    );
  }
  
  export default FetchData3;