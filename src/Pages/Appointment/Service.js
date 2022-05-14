import React from "react";

const Service = ({ service,setTreatment }) => {
  const { name, slots } = service;
  return (
    
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
    <div class="card-body text-center">
        <h2 class=" text-secondary text-xl font-bold">{name}</h2>
        <p>{
            slots.length >0 ? 
            <span> {slots[0]}</span>:<span className="text-red-500">Try another day</span>
            }
           </p>
        <p>{slots.length} {slots.length>1 ? 'spaces': 'space'} now available </p>
        <div class="card-actions justify-center">
          <label 
          for='Booking-modal'
          disabled={slots.length === 0} class="btn btn-secondary uppercase "
         onClick={() => setTreatment(service)}
       > Book Appointment</label>
        </div>
      </div>
      </div>
  
  );
};

export default Service;
