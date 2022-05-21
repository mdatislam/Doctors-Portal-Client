import React from "react";
import { Link, Outlet } from "react-router-dom";
import myAppointment from "./MyAppointment";
import useAdmin from '../Hook/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const DashBoard = () => {
  const [user] = useAuthState(auth)
  const [admin]=useAdmin(user);
  console.log(admin)
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link to="/DashBoard">My Appointment</Link>
          </li>
          <li>
            <Link to="/DashBoard/MyReview">My Review</Link>
          </li>
          <li>
            <Link to="/DashBoard/MyHistory">My History</Link>
          </li>
         { admin && 
         <>
         <li><Link to="/DashBoard/users">All Users</Link></li>
         <li><Link to="/DashBoard/AddDoctor">Add Doctor</Link></li>
         </> 
         
         }
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
