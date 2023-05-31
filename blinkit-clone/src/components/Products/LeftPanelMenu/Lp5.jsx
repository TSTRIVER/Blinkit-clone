import React, { useState } from "react";
import "../products.css";
import { updateCol ,updateName} from "../../../Store/click_slice";
import { useDispatch,useSelector } from "react-redux";

const Lp5 = () => {
  const left_arr = [
    { name: "Shampoos", img: "" },
    { name: "Conditioners", img: "" },
    { name: "Soaps", img: "" },
    { name: "Detergents", img: "" },
    { name: "Toilet Liquid Cleaners", img: "" },
    { name: "Air Fresheners", img: "" },
    { name: "Wipers", img: "" },
    { name: "Phenyls", img: "" },
    { name: "Toilet Brushes", img: "" },
    { name: "Holders", img: "" },
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT--6xRg8NNRRVzy5m9ko61xV8Xl1tWAZx1Zw&usqp=CAU"
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

export default Lp5;
