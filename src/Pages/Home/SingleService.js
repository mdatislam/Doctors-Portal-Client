import React from "react";

const SingleService = ({ service }) => {
    console.log(service.name)
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={service.img} width='70'
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{service.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
       
      </div>
    </div>
  );
};

export default SingleService;
