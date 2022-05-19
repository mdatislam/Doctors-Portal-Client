import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from "firebase/auth";

const Nav = () => {
  const [user]=useAuthState(auth)
  const LogOut =()=>{
    signOut(auth)
    localStorage.removeItem('Access Token')
  }
    const menuItems=
    <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/appointments'>Appointment</Link></li>
            {/* <li><Link to='/Reviews'>Reviews</Link></li> */}
           {
              user && <li><Link to='/DashBoard'>DashBoard</Link></li>
           }
            <li><Link to='/Contact'>ContactUs</Link></li>
            <li>{ user ? <button className="text-Green-500 bg-red-300" onClick={LogOut}>SignOut</button>:<Link to='/Login'>Login</Link>}</li>
    </>
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
           {menuItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">Doctors Portal</a>
        </div>
        <div class="navbar-center hidden lg:flex navbar-end">
          <ul class="menu menu-horizontal p-0 "  tabindex="0">
           {menuItems}
          </ul>
        </div>
        {/* <div class="navbar-end">
          <a class="btn">Login</a>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
