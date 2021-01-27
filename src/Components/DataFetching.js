import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts,setPosts]=useState([])
    const [id,setId]=useState(1)
    
    useEffect(()=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div>
        {/* <input type='text' value={id} onChange={e=>setId(e.target.value)} ></input> */}
        <ol>
            {posts.map(post=>(
                <li key={post.id}>
                    {post.title}
                </li>
  ))}
            
        </ol>
      
    </div>
  );
}

export default DataFetching;