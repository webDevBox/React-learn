import axios from 'axios'
import React,{useState,useEffect} from 'react'

function FetchbtnClick() {
    const [id,setId]=useState(1)
    const [posts,setPosts]=useState({})
    const [btn,setBtnClick]=useState(1)

    useEffect(()=>{
        axios.get(`http://jsonplaceholder.typicode.com/posts/${btn}`)
        .then((res)=>{
            console.log(res)
            setPosts(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[btn])

    const handleClick=()=>{
        setBtnClick(id)
    }

  return (
    <div>
        <input type='text' value={id} onChange={e=>{setId(e.target.value)}} />
        <div>{posts.title}</div>
        <button type='button' onClick={handleClick}>FetchPost</button>
    </div>
  );
}

export default FetchbtnClick;