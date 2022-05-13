import React from "react";


const Reviews = ({ review }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{review.reviews}</p>
        <div className="flex justify-space items-center mt-4">
        <div class="avatar">
          <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.img}  />
          </div>
        </div>
        <div className="ml-5">
            <h3>{review.name}</h3>
            <p>{review.location}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
