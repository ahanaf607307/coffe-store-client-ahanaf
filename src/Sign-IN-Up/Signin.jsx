import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

function Signin() {
  const {signInUser , users , setUsers} = useContext(AuthContext)
  const handleSignIn = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = e.target.email.value
    const password = e.target.password.value
    const loginUser = {email , password}
    console.log(loginUser)
    signInUser(email,password)
    .then(res =>{
      console.log(res.user)
     const lastSignInTime = res?.user?.metadata?.lastSignInTime
     const loginInfo = {email , lastSignInTime}
     fetch('http://localhost:5000/users',{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(loginInfo)
     })
     .then(res => res.json())
     .then(data => {
      console.log('login info updated in db' , data)
     })
     
    })
    .catch(error => {
      console.log("ERR -> " , error)
      
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignIn now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignIn</button>
        </div>
      </form>
      <Link className='btn bg-green-500' to='/'>Home</Link>
    </div>
  </div>
  
</div>
  )
}

export default Signin

