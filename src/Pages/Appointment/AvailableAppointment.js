import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(()=>{
    // https://enigmatic-waters-37781.herokuapp.com/appointments
    // http://localhost:5000/appointments
    fetch(' https://enigmatic-waters-37781.herokuapp.com/appointments')
    .then(res=>res.json())
    .then(data => setServices(data))
  },[]);
    // console.log(services)
  return (
    <div>
      <h3 className="text-secondary text-center text-xl ">
        {" "}
        Available Appointment on {format(date, "PP")}{" "}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      <div>
        {treatment && (
          <BookingModal
            treatment={treatment}
            date={date}
            setTreatment={setTreatment}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
