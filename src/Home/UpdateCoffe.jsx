import React from 'react'
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

function UpdateCoffe() {
  const coffe = useLoaderData()
 
  const {_id,coffeName,quantity,supplier,teste,category,details,photoUrl} = coffe

  console.log(coffeName)
  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const coffeName = e.target.coffeName.value
    const quantity = e.target.quantity.value
    const supplier = e.target.supplier.value
    const teste = e.target.teste.value
    const category = e.target.category.value
    const details = e.target.details.value
    const photoUrl = e.target.photoUrl.value
    const addCoffeDetails = {coffeName,quantity,supplier,teste,category,details,photoUrl}
    console.log(addCoffeDetails , _id , )
    
    fetch(`http://localhost:5000/coffe/${_id}` , {
      method:'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(addCoffeDetails)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0) {
          Swal.fire({
            title: 'Successfully Updated!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Okey'
          })
        }
    })
    
    // console.log(coffeName,quantity,supplier,teste,category,details,photoUrl)
    console.log(addCoffeDetails)
        }
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
    <div>
      <NavLink to='/' className='btn bg-red-500'>Home</NavLink>
    </div>
    <h2 className='text-4xl text-center font-semibold text-blue-500 my-10'>Update Coffe : {coffeName}</h2>
    <form onSubmit={handleUpdateSubmit} className="w-[800px] bg-stone-200 p-14 rounded-xl flex flex-col gap-y-5">
      {/* name and available quantity */}
      <div className="flex gap-x-3">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Coffe Name</span>
        </div>
        <input
          type="text"
          placeholder="Coffe name"
          name="coffeName"
          defaultValue={coffeName}
          className="input input-bordered input-md w-full "
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Available Quantity</span>
        </div>
        <input
          type="text"
          placeholder="Available Quantity"
          name="quantity"
          defaultValue={quantity}
          className="input input-bordered input-md w-full "
        />
      </label>
      </div>
      {/* supplier and teste y */}
      <div className="flex gap-x-3">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Supplier Name</span>
        </div>
        <input
          type="text"
          placeholder="Supplier Name"
          name="supplier"
          defaultValue={supplier}
          className="input input-bordered input-md w-full "
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Teste</span>
        </div>
        <input
          type="text"
          placeholder="Teste"
          name="teste"
          defaultValue={teste}
          className="input input-bordered input-md w-full "
        />
      </label>
      </div>
      {/* Category and Details */}
      <div className="flex gap-x-3">
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Category</span>
        </div>
        <input
          type="text"
          placeholder="Category"
          name="category"
          defaultValue={category}
          className="input input-bordered input-md w-full "
        />
      </label>
      <label className="form-control w-full ">
        <div className="label">
          <span className="label-text">Details</span>
        </div>
        <input
          type="text"
          placeholder="Details"
          name="details"
          defaultValue={details}
          className="input input-bordered input-md w-full "
        />
      </label>
      </div>
      {/* Photo URL */}
      <div className="flex gap-x-3">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Photo URL</span>
        </div>
        <input
          type="text"
          placeholder="Photo URL"
          name="photoUrl"
          defaultValue={photoUrl}
          className="input input-bordered input-md w-full "
        />
      </label>
     
      </div>
      <input type="submit" value="Update Coffe" className="btn btn-block bg-sky-500" />
    </form>
  </div>
  )
}

export default UpdateCoffe
