import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {SiGmail } from 'react-icons/si';
import {FaTwitter} from 'react-icons/fa'

function Contactus() {
  return (
    <div className='bg-dark'>
        <div className=' container text-light ' >
            <h1 className='text-center m-5'>CONTACT US</h1>
     <div className="row  d-flex ">
       <h1 className='m-4 text-dark'>.</h1>
               <div className="col-lg-3 ">
          <h1 className='text-center'> <FaPhoneAlt className='text-success'/>
        </h1>
       
         <h4 className='m-4 text-center' >PHONE</h4>
        {/* < p className='mt-4 text-center ' > <b>NATIONAL:</b> </p> */}
         <p className="  m-5 text-center">9218971281</p>
         {/* < p className='mt-4 text-center ' > <b>INTER NATIONAL:</b> </p>
         <p className=" mt-0 mb-3 text-center">+2191 22782 1652 177221</p> */}
        </div>
        <div className="col-lg-3">
        <h1 className='text-center'> <SiGmail style={{color:'#c71610'}}/>
        </h1>
         <h4 className='text-center m-4'>EMAIL</h4>    
         <p className='m-5 text-center'>concentriasupport@gmail.org</p>
        </div>
        <div className="col-lg-3">
        <h1 className='text-center'> <FaLinkedinIn style={{color:'#0e76a8'}}/>
        </h1>   
        <h4 className='text-center m-4'>LINKEDIN</h4>  
        <p className='m-5 text-center'>concentriasupportlinkedin.com</p>
        </div>
        <div className="col-lg-3">
        <h1 className='text-center'> <FaTwitter style={{color:'#1DA1F2'}}/>
        </h1>      
        <h4 className='text-center m-4'>TWITTER</h4>  
        <p className='m-5 text-center'>concentriasupporttwitter.com</p>
        </div>
        </div>
     </div>



  <h1 className='m-5 '>.</h1>
  
  <h1 className='m-1 '>.</h1>
  <h1 className='m-1 '>.</h1>
    </div>
  )
}

export default Contactus