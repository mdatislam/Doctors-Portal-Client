import React from "react";
import { toast } from "react-toastify";


const UserRow = ({ user, index, refetch }) => {
  
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("Access Token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an Admin");
        }

        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("successfully make an admin role");
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        ) : (
          <span className="text-green-600 text-bold bg-parple-400">
            Already Admin
          </span>
        )}
      </td>
      <td>
        <button class="btn btn-xs">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
