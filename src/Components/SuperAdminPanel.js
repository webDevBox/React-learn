import React from 'react'
import Myheader from './Myheader'
import './styles.css'
import Dashboard from './Dashboard'
import {Link} from "react-router-dom"
import MyMenu from './MyMenu'

function SuperAdminPanel(){

    return(
        <>
        <Myheader/>
        <div className='row'>
        <MyMenu/>
        <div className='col-lg-10 col-md-10 col-xs-12 col-sm-12 bgclr'>
            <h1 className='klr'>Super Admin Dashboard</h1>
            <h3 className='klr'>Users</h3>
            <div className='col-md-2 col-lg-2 col-md-offset-1 col-lg-offset-1 col-sm-12 col-xs-12 '>
                <h3 className='klr'>Students</h3>
            </div>
        </div>
        </div>
        </>
    )
}
export default SuperAdminPanel