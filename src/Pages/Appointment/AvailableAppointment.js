import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

import Loading from "../SharedPage/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(date, "PP");

  const { isLoading, data: services,refetch } = useQuery(['available',formattedDate], () =>
    fetch(`http://localhost:5000/available?date=${formattedDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  /*  useEffect(() => {
    // https://enigmatic-waters-37781.herokuapp.com/appointments
    // http://localhost:5000/appointments
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [formattedDate]); */
  // console.log(services)
  return (
    <div>
      <h3 className="text-secondary text-center text-xl ">
        {" "}
        Available Appointment on {format(date, "PP")}{" "}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
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
            refetch={refetch}
            setTreatment={setTreatment}
          ></BookingModal>
        )}
      </div>
    </div>
  );
};

export default AvailableAppointment;
