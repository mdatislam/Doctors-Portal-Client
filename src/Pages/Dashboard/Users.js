import React, { useEffect, useState } from "react";
import Loading from '../SharedPage/Loading'
import UserRow from "./UserRow";
import { useQuery } from 'react-query';

const Users = () => {
  const {data:users,isLoading,refetch}= useQuery('users' ,()=>
    fetch('http://localhost:5000/users').then(res=>res.json())
  )
if(isLoading){
  return <Loading></Loading>
}
   
  /* const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users" ,{
      method:'GET',
      headers:{
        authorization:`Bearer ${localStorage.getItem('Access Token')}`
      }
    }).then((res) =>
      res.json().then((data) => setUser(data))
    );
  }, []);
 */
  return (
    <>
      <div class="overflow-x-auto">
        <h2 className="text-center text-purple-400"> Total User Found:{users.length}</h2>
        <table class="table">
          <thead>
            <tr>
              <th>SN</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove Admin</th>
             
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} 
              refetch={refetch}
              index={index} user={user}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
