import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date,setTreatment }) => {
  const { name,slots,_id } = treatment;

const handleSubmit= event =>{
    event.preventDefault()
    const date1 = event.target.date.value;
    const timeSlot = event.target.slot.value
    const name = event.target.name.value
    console.log(date1,timeSlot,name);
    setTreatment(null)
}
  return (
    <div>
      <label for="Booking-modal" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="Booking-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="Booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            {" "}
            ✕{" "}
          </label>
          <h3 class="text-lg font-bold"> Booking Treatment: {name}</h3>


          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 justify-items-center mt-4">
            <input
              type="text"
              disabled
              name="date"
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
             
               {
                   slots.map(slot=> <option>{slot}</option>)
               }
              
            </select>
            <input
              type="text"
            name="name"
              placeholder="Full Name"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
            name="date"
              placeholder="Phone Number"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="example@.com"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              class="input input-bordered w-full max-w-xs btn btn-primary text-white "
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
