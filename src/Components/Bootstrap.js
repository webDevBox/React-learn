import React from 'react'
import './styles.css'

function Bootstrap() {
  return (
    <>
    <div className='row'>

      <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 bgred'>
        <h1>Leftside</h1>
      </div>

      <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 bgYellow'>
        <h1>Center</h1>
      </div>

      <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 bgreen'>
        <h1>Rightside</h1>
      </div>

    </div>

    <div className='row mrgntp'>
    <div className='col-lg-4 col-md-4 offset-lg-4 offset-md-4 col-sm-12 col-xs-12 bgred'>
        <h1>Center</h1>
      </div>
    </div>

    <div className='row mrgntp'>
    <div className='col-lg-4 col-md-4 offset-lg-8 offset-md-8 col-sm-12 col-xs-12 bgreen'>
        <h1>Rightside</h1>
      </div>
    </div>

    <div className='row mrgntp'>
    <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 bgred'>
        <h1>Leftside</h1>
      </div>
      <div className='col-lg-4 col-md-4 offset-lg-4 offset-md-4 col-sm-12 col-xs-12 bgreen'>
        <h1>Rightside</h1>
      </div>
    </div>
    </>
  );
}

export default Bootstrap;