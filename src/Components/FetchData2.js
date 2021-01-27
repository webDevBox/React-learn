import React,{useState} from 'react'
import FetchData1 from './FetchData1';
import axios from 'axios'

function FetchData2() {
    const [id,setId]=useState(1)
    const [employdata,setEmploydata]=useState({
        id:'',
        employee_name:'',
        employee_salary:'',
        employee_age:''
        // profile_image:''
    })

    const handleClick=()=>{
        const url=`http://dummy.restapiexample.com/api/v1/employee/${id}`
        axios.get(url)
        .then((response)=>{
            console.log(response.data.data)
            setEmploydata(response.data.data)
        })
    }

    return (
      <div>
          <div>
          <input type='text' value={id} onChange={e=>{setId(e.target.value)}} ></input>
          </div>
          <button onClick={handleClick} >FetchData</button>
          <div> {employdata.id} </div>
          <div> {employdata.employee_name} </div>
          <div> {employdata.employee_salary} </div>
          <div> {employdata.employee_age} </div>
          {/* <div> {employdata.profile_image} </div> */}
      </div>
    );
  }
  
  export default FetchData2;