import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function CoffeCard({ coffe, coffees, setCoffees }) {
  const {
    _id,
    coffeName,
    quantity,
    supplier,
    teste,
    category,
    details,
    photoUrl,
  } = coffe;

  const handleDeleteCoffe = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffe/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffe has been deleted.",
                icon: "success",
              });
              
              const remainingCoffe = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffe);
            }
          });

        console.log("delete");
      }
    });
  };
  return (
    <div className=" bg-base-100 shadow-xl grid grid-cols-2">
      <figure>
        <img src={photoUrl} alt="Movie" />
      </figure>
      <div className=" flex  items-center justify-between">
        <div>
          <h2 className="card-title">{coffeName}</h2>
          <p>{supplier}</p>
          <p>{teste}</p>
        </div>

        <div className="join join-vertical space-y-5">
          <button className="btn join-item bg-green-500">View</button>
          <Link
            to={`/updateCoffe/${_id}`}
            className="btn join-item bg-blue-300"
          >
            ✏
          </Link>
          <button
            onClick={() => handleDeleteCoffe(_id)}
            className="btn join-item bg-red-200"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoffeCard;
