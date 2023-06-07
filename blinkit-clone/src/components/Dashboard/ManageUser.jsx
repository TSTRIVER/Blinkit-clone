import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOrders } from '../../Store/orders_slice';

const ManageUser = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const {all_users} = useSelector((state) => state.user);

   const managebtn = (id,name) => {
       dispatch(fetchOrders(id));
       navigate(`/orders/${name}/${id}`);
   }

  return (
    <>
     <div className="datagrid">
        <table>
          <thead>
            <tr>
              <th>User Id</th>
              <th>User Name</th>
              <th>User Number</th>
              <th>User Orders</th>
            </tr>
          </thead>
          <tbody>
            {all_users.map((ele, index) => (
              <tr
                key={ele._id}
                className={index % 2 === 0 ? "even-row" : "odd-row"}
              >
                <td>{ele._id}</td>
                <td>{ele.name}</td>
                <td>+91{" " + ele.number}</td>
                <td>
                  <button
                    style={{
                      color: "skyblue",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={()=>managebtn(ele._id,ele.name)}
                  >
                    <FontAwesomeIcon icon={faPen} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ManageUser