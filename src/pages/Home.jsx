import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='contianer'> 
    <img src='/MU logo.png' className='logo-image'/>
<span className='logo-name'>Kamal University</span>
<div className="inputs">
    <div className="row">
    <input type="text" placeholder='Search Student ID' />
    <div className="icon">
        <Link style={{textDecoration: 'none', color:  'white'}} to={'/verify/2022'}>
    <span >Search</span>
        
        </Link>
    </div>
  
    </div>
   
</div>
    </div>
  )
}

export default Home