import React, { useContext, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import CoffeCard from "../Home/coffeCard";
import Header from "./Header";
import { AuthContext } from "../Provider/AuthProvider";

function MainLayout() {
  const {devName } = useContext(AuthContext)

  const coffeeData = useLoaderData();
  const [coffees, setCoffees] = useState(coffeeData);
  return (
    <div>
   <div className="">
   <Header/>
   </div>
  
      <div className="p-5">
      <div>
        <NavLink to="/addCoffe" className="btn bg-red-500">
          Add Coffe
        </NavLink>
      </div>

      <h2 className="text-5xl text-center my-10">Coffe </h2>

      <div className="grid grid-cols-2 gap-5">
        {coffees.map((coffe) => (
          <CoffeCard
            key={coffe._id}
            coffe={coffe}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default MainLayout;
