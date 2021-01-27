import React from 'react'
import Myheader from './Myheader'
import './styles.css'
import Dashboard from './Dashboard'
import {Link} from "react-router-dom"

function MyMenu(){

    return(
        <>
        
        
            <div className='col-lg-2 col-md-2 col-sm-12 col-xs-12 bgklr'>
                
                <hr className='line'/>
                
                <h1><Link className='klr' to="/dashboard">Dashboard</Link></h1>
                <hr className='line'/>
                
                <h1><Link className='klr' to="/districts">Districts</Link></h1>
                <hr className='line'/>
                
                <h1><Link className='klr' to="/schools">Schools</Link></h1>
                <hr className='line'/>
                
                <h1><Link className='klr' to="/habits">Habits</Link></h1>

                <hr className='line'/>
                
                <h1><Link className='klr' to="/quries">Quries</Link></h1>
                <hr className='line'/>
                
                <h2><Link className='klr' to="/pushnotifications">Push Notifications</Link></h2>
                <hr className='line'/>
                
                <h1><Link className='klr' to="/webcontrols">Web Control</Link></h1>
                <hr className='line'/>
                
                <h1><Link className='klr' to="/settings">Settings</Link></h1>
            </div>

        
        </>
    )
}
export default MyMenu