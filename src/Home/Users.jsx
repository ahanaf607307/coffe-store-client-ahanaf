import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'

function Users() {
    const users = useLoaderData()
    const [deleteUser, setDeleteUser] = useState(users)
   const handleDelete=(_id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('delete one' , data)
                if(data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      const remainingUsers = deleteUser.filter(user => user._id !== _id)
                       setDeleteUser(remainingUsers)
                }
               
            })
          
        }
      });
    
   }

  return (
    <div>
      <h1 className='text-3xl my-5'>Users : {deleteUser.length}</h1>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>lastSignInTime</th>
        <th>Id</th>
      </tr>
    </thead>
    <tbody>
     {
        deleteUser.map((user , index )=> (
            <tr key={user._id}>
            <th>{index+1} </th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.lastSignInTime}</td>
            <td>{user._id}</td>
            <td>
                <button className='btn mx-2'>✏</button>
                <button onClick={()=> handleDelete(user._id)} className='btn mx-2'>❌</button>
            </td>
          </tr>
        ))
     }


    </tbody>
  </table>
</div>
<Link className='btn bg-red-500' to='/'>Home</Link>
    </div>
  )
}

export default Users
