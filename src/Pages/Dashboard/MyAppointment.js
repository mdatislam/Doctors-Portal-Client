import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyAppointment = () => {
  const [user] = useAuthState(auth);
  const [appointments, setAppointment] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("Access Token")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("Access Token");
            navigate("/");
          }
          return res.json();
        })

        .then((data) => setAppointment(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-2xl font-bold text-red-500 text-center mb-3">
        Your Total Appointments:{appointments.length}
      </h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>SN</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time slot</th>
            </tr>
          </thead>
          <tbody>
            {/*  <!-- row 1 --> */}
            {appointments.map((a, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{a.patient}</td>
                <td>{a.treatmentName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
