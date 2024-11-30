import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignUp() {
  const {signUpNewUser,setUsers,users} = useContext(AuthContext)
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(name , email ,password)
        signUpNewUser(email,password)
        .then(result => {
          console.log(result.user)
          const newUser = {name , email}
          setUsers(result.user)
          fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
          }).then(res => res.json())
          .then(data => {
            if(data.insertedId) {
              console.log('user created in db')
            }
          })
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SignUp Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        })
        
        .catch(error => {
          console.log('the ERR : ' , error)
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already Use email ",
            showConfirmButton: false,
            timer: 1500
          });
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
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
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
      <Link className='btn bg-green-500' to='/'>Home</Link>
    </div>
  </div>
  
</div>
  )
}

export default SignUp
