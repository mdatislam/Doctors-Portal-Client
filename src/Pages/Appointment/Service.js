import React from "react";

const Service = ({ service, setTreatment }) => {
  const {name, slots} = service;
  // console.log(slots);
  
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body text-center">
        <h2 class=" text-secondary text-xl font-bold">{name}</h2>
        <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">Try another day</span>}</p>
        <p>{slots.length} {slots.length>1 ? 'spaces': 'space'} now available </p>
        {/* <p>{
            slots.length >0 ? 
            <span> {slots[0]}</span>:<span className="text-red-500">Try another day</span>
            }
           </p>
        <p>{slots.length} {slots.length>1 ? 'spaces': 'space'} now available </p> */}
        <div class="card-actions justify-center">
          <label
            htmlFor="Booking-modal"
            class="btn btn-sm  bg-gradient-to-r from-secondary to-primary hover:from-pink-500 hover:to-yellow-500  font-bold uppercase "
            onClick={() => setTreatment(service)}
          >
            {" "}
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
