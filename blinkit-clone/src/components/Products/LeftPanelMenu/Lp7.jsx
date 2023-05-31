import React, { useState } from "react";
import "../products.css";
import { updateCol ,updateName} from "../../../Store/click_slice";
import { useDispatch} from "react-redux";

const Lp7 = () => {
  const left_arr = [
    { name: "Good Day", img: "" },
    { name: "Britannia", img: "" },
    { name: "Unibic Cookies", img: "" },
    { name: "Pastries", img: "" },
    { name: "Pizza Dough", img: "" },
    { name: "Samosa Sheets", img: "" },
    { name: "Rawa Cakes", img: "" },
    { name: "Birthday Cakes", img: "" },
    { name: "Dark Fantasy", img: "" },
    { name: "Nutrichoice", img: "" },
  ];
  
  let [left_active,setLeft_active] = useState(0);

  const handle_click2 = (event, index) => {
     setLeft_active(index);
  };

  const dispatch = useDispatch();
  const click = {second : left_active};
  const name = {name : left_arr[left_active].name};
  dispatch(updateCol(click));
  dispatch(updateName(name));


  return (
    <>
      {left_arr.map((ele,key) => (
        <button
          className="lp-cont"
          onClick={(event) => handle_click2(event, key)}
          key={key}
        >
          <img
            src="https://static.toiimg.com/thumb/62403305.cms?imgsize=566439&width=800&height=800"
            style={{
              width: "20%",
              height: "50%",
              marginLeft: "1vw",
              marginRight: "1vw",
            }}
          />
          <p>{ele.name}</p>
        </button>
      ))}
    </>
  );
};

export default Lp7;
