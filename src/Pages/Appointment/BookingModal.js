import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
  const { name, slots, _id } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const timeSlot = event.target.slot.value;
    const mobile = event.target.mobile.value;

    const booking = {
      treatmentID: _id,
      treatmentName: name,
      date: formattedDate,
      slot: timeSlot,
      patient: user.email,
      patientName: user.displayName,
      Mobile: mobile,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.success){
          toast(`Your Booking submit successfully on date ${formattedDate} at ${timeSlot}` )
        }
        else{
          toast.error(`Already have an appointment on ${data?.booking.date} at slot ${data?.booking.slot}` )
        }
       console.log(data);
       refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <label htmlFor="Booking-modal" class="btn modal-button">
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

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 justify-items-center mt-4"
          >
            <input
              type="text"
              disabled
              name="date"
              value={format(date, "PP")}
              class="input input-bordered w-full max-w-xs"
            />
            <select name="slot" class="select select-bordered w-full max-w-xs">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              disabled
              value={user?.displayName || ""}
              class="input input-bordered w-full max-w-xs"
            />
            <input
              disabled
              value={user?.email || ""}
              type="email"
              name="email"
              placeholder="example@.com"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="mobile"
              placeholder="Phone Number"
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
