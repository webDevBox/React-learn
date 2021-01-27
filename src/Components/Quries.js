import React from 'react'
import Myheader from './Myheader'
import './styles.css'
import MyMenu from './MyMenu'
function Quries(){

    return(
        <> 
        <Myheader/>
        <div className='row'>

            <MyMenu/>
            <div className='col-md-offset-2 col-lg-offset-2 col-lg-5 col-md-5 col-sm-12 col-xs-12 '>
        <h1 className='green'>This is a Quries Component</h1>
        </div>
        </div>
        </>
    )
}
export default Quries