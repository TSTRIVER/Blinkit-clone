import React, { useState } from "react";
import "../products.css";

import { updateCol ,updateName} from "../../../Store/click_slice";
import { useDispatch} from "react-redux";

const Lp6 = () => {
  const left_arr = [
    { name: "Bournville & Cadbury", img: "" },
    { name: "Candies & Gummies", img: "" },
    { name: "Dark Chocolates", img: "" },
    { name: "Imported Chocolates", img: "" },
    { name: "Protein Bars", img: "" },
    { name: "Dates", img: "" },
    { name: "Badam & Cashew", img: "" },
    { name: "Anjeer", img: "" },
    { name: "Raisins", img: "" },
    { name: "Cardamoms", img: "" },
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSDpq4falznUHAXgMqml3gpWgWJFGJxtldHFN1f-NcmPwE2xMLWXTOg9q9LDDh6j4B59Y&usqp=CAU"
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

export default Lp6;
