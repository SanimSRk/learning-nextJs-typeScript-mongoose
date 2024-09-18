'use client'
import axios from 'axios'
import React, { useState } from 'react'

export default function Signups() {
const [userData,setuserData]=React.useState({
  fullName:'',
  email:'',
  password:''
})

const handileClickSignup=async(evant:React.FormEvent<HTMLFormElement>)=>{
evant.preventDefault()
 try {
 
  if(!userData.fullName||!userData.email||!userData.password){
   return alert("data is messing ")
  }
   const data= await axios.post('/api/sign-up',userData)
   console.log(data.data)
 } catch (error) {
  console.log(error)
 }

}
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col w-2/5 mx-auto lg:flex-row-reverse">
    <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
      <form onSubmit={handileClickSignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label> 
          <input type="text" onChange={(e)=>setuserData({...userData,fullName:e.target.value})} placeholder="Full Name" name='fullName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label> 
          <input type="email" onChange={(e)=>setuserData({...userData,email:e.target.value})} placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" onChange={(e)=>setuserData({...userData,password:e.target.value})} placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type='submit'  className="btn btn-primary ">Sigup</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}
