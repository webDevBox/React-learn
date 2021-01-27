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
        <MyMenu/>
        
        </>
    )
}
export default SuperAdminPanel