import React from 'react'
import {useForm} from 'react-hook-form'


function Register() {
    const {register,handleSubmit, formState:{errors}}=useForm()

    const onFormSubmit= (userdata)=>
    {
        console.log(userdata)
    }

  return (
   
    <div className='row m-5 '>
       <div className="col-1"></div>
            <div className="col-10 ">

            <p className="display-1 text-center text-warning">JOIN CONCENTRIA</p>
            <div className="col-11 col-sm-8  mx-auto mt-3 text-light ">
                <form onSubmit={handleSubmit(onFormSubmit)} variant="dark">
                <div className="row mx-auto">
                  
                    <div className="col-6">
                    <label htmlFor="fn" >FIRST NAME</label>
                        <input type="text" id="fn" className="form-control bg-dark text-light" {...register("firstname",{ required: true, minLength: 4 ,maxLength:10})} />
                        {errors.firstname?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.firstname?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.firstname?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}

                    </div>
                    <div className="col-6">
                    <label htmlFor="ln">LAST NAME</label>
                        <input type="text" id="ln" className="form-control bg-dark text-light" {...register("lastname",{required:true, minLength: 4 ,maxLength:10})} />
                        {errors.lastname?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.lastname?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.lastname?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}
                    </div>
                 
                </div>
                <div className="m-3">
                        <label htmlFor="un">USERNAME</label>
                        <input type="text" id="un" className="form-control bg-dark text-light" {...register("username",{ required: true, minLength: 4 ,maxLength:20})} />
                        {errors.username?.type === 'required' && <p className='text-danger'>* Username required</p>}
                        {errors.username?.type === 'minLength' && <p className='text-danger'>* Min length should be 4</p>}
                        {errors.username?.type === 'maxLength' && <p className='text-danger'>* Max length should be 10</p>}
                 </div>
                 <div className="m-3">
                     <label htmlFor="email">EMAIL</label>
                     <input type="email" id="email" className='form-control bg-dark text-light' {...register("email",{required:true})} />
                     {errors.email?.type==='required'&&<p className='text-danger'>*Email Required</p>}
                 </div>
                 <div className="m-3" >
                        <label htmlFor="dob">DATE OF BIRTH</label>
                        <input type="date" id="dob" className="form-control bg-dark text-light" {...register("dob",{required:true})} />
                        {errors.dob?.type==='required'&&<p className='text-danger'>*DOB required</p>}
                </div>
                <div className="m-3">
                     <label htmlFor="mno">MOBILE NO</label> 
                     <input type="tel" id="mno" className='form-control bg-dark text-light' {...register("mobileno",{required:true})} />
                     {errors.mobileno?.type==='required'&&<p className='text-danger'>*MobileNo. required</p>}
                 </div>
               
                <div className="m-3">
                    
                <div className="m-3">
                    <label className='m-2'>SELECT GENDER</label>
                <div className="form-check">
                            <input type="radio" id="male" className="form-check-input text-light" {...register("gender",{required:true})} value="male" />
                            <label htmlFor="male" className="form-check-label">MALE</label>
                </div>
                <div className="form-check">
                            <input type="radio" id="male" className="form-check-input  text-light" {...register("gender",{required:true})} value="female" />
                            <label htmlFor="female" className="form-check-label">FEMALE</label>
                            {errors.gender?.type==='required'&&<p className='text-danger'>*gender required</p>}
                </div>
                </div>
                <div className="m-3">
                        <label htmlFor="feedback">USER BIO</label>
                        <textarea id="feedback" rows="5" className="form-control bg-dark text-light" {...register("feedback",{required:true})}></textarea>
                        {errors.feedback?.type==='required'&&<p className='text-danger'>*Description required</p>}
                </div>
                </div>
                <div className="m-5">
                    <div className="row">
                        <div className="col-2 mx-auto">
                        <button className='btn btn-success w-100 p-2 ml-5' >SUBMIT</button>
                        </div>
                          </div>
                
                </div>
                   
                </form>

            </div>
            </div>
            
            <div className="col-1"></div>
            
  <h1 className='m-5 '>.</h1>
  


    </div>
  )
}

export default Register