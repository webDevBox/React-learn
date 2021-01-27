import axios from 'axios'
import React,{useState} from 'react'

function PostData2() {
    const [mydata,setMydata]=useState({})

    const handleChange=((event)=>{
        setMydata({...mydata,[event.target.name]:event.target.value})
    })

    const handleClick=()=>{
        const url='https://reqres.in/api/users'
        axios.post(url,mydata)
        .then((response)=>{
            console.log(response)
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
      <div>
          <button onClick={handleClick} >PostData</button>
          <div>
          <input type='text' name='Name' value={mydata.name} onChange={handleChange} placeholder='type name' ></input>
          </div>
          <div>
          <input type='text' name='Movies' value={mydata.name} onChange={handleChange} placeholder='type movies name' ></input>
          </div>
          {/* <div> {mydata.name} </div>
          <div> {mydata.movies} </div> */}
      </div>
    );
  }
  
  export default PostData2;