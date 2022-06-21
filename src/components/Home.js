import React from 'react'
import home1 from '../images/home1.png';
import home2 from '../images/home2.png';
import home3 from '../images/home3.jpg';
import home4 from '../images/home4.jpg';
import './home.css'
function Home() {
  return (
    <div className='container-fluid'>
      <div className="container1">
        <div className="row">
          <img src={home3} alt="" className='home3 w-100' />
          <div class="centered ">
            <h1 className='text-dark text1'>CONCENTRIA</h1>
            
          </div>
        </div>
        </div>

        <div className="bottom">

            <h1 className='text-light text-center mt-5 mb-5 text2 display-3'>"CONCENTRATION IS THE SECRET OF STRENGTH"</h1>
            <hr  className='text-white'/>
          </div>
        <div className='todo'>
        <img src= {home4}className='w-75 d-flex mx-auto todoi'></img>
        <h1 className='text-light todotext'>TODO-LIST</h1>
        </div>
      <div className="row">
        <div className="col-sm-6 mt-5 mb-3">
        <img src={home1} className='w-100' />
        </div>
        <div className="col-sm-6 mt-5 mb-3">
        <img src={home2}  className='w-100' />
     
        </div>
        <p className='text-center text-light display-4'>
          WHATEVER THE MOOD <span className='text-danger'> -__-</span>  : CONCENTRIA MAKES YOU CONCENTRATED <span className='text-success'>^__^ </span>
        </p>
      </div>
     
      
    </div>
  )
}

export default Home