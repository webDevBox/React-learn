import React from 'react'

function Myheader(){

    return(
        <>
        <div className='row '>
            <div className='col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12'>
            <h1>My Super Admin Panel</h1>
            </div>
            <div className='col-md-1 col-lg-1 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12'>
                <button className='btn btnbg '>SIGN OUT</button>
            </div>
            </div>
        </>
    )
}
export default Myheader