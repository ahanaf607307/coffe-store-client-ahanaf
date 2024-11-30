import React from "react";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'
function AddCoffe() {
    const handleFormSubmit = (e) => {
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

fetch('http://localhost:5000/cofee' , {
  method:'POST',
  headers:{
    'content-type' : 'application/json'
  },
  body:JSON.stringify(addCoffeDetails)
})
.then(res => res.json())
.then(data => {
    console.log(data)
    if(data.insertedId) {
      Swal.fire({
        title: 'Successfully Added!',
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
      <form onSubmit={handleFormSubmit} className="w-[800px] bg-stone-200 p-14 rounded-xl flex flex-col gap-y-5">
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
            className="input input-bordered input-md w-full "
          />
        </label>
        </div>
        {/* Photo URL */}
        <div className="flex gap-x-3">
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Photo URL</span>
          </div>
          <input
            type="text"
            placeholder="Photo URL"
            name="photoUrl"
            className="input input-bordered input-md w-full "
          />
        </label>
       
        </div>
        <input type="submit" value="Add Coffe" className="btn btn-block bg-sky-500" />
      </form>
    </div>
  );
}

export default AddCoffe;
