import React, { useState } from "react";
import "../products.css";
import { useDispatch } from "react-redux";
import { updateCol, updateName } from "../../../Store/click_slice";

const Lp1 = () => {
  const [buttons, setButtons] = useState([
    { name: "Fresh Vegetables", img: "", active: true ,id:0},
    { name: "Organic Vegetables", img: "", active: false ,id:1},
    { name: "Seasonals", img: "", active: false ,id:2},
    { name: "Exotics", img: "", active: false ,id:3},
    { name: "Leafy Vegetables", img: "", active: false ,id:4},
    { name: "Herbs", img: "", active: false ,id:5},
    { name: "Fruits", img: "", active: false ,id:6},
    { name: "Mangoes", img: "",active: false ,id:7},
    { name: "Imported Fruits", img: "", active: false ,id:8},
    { name: "Sprouts", img: "", active: false ,id:9},
  ]);

  let [left_active, setLeft_active] = useState(0);

  const handle_click2 = (event, index) => {
    setLeft_active(index);
    setButtons(prevButtons => {
      return prevButtons.map(button => {
        if (button.id === index) {
          return { ...button, active: !button.active };
        }
        return { ...button, active: false };
      });
    });
  };

  const dispatch = useDispatch();
  const click = { second: left_active };
  const name = { name: buttons[left_active].name };
  dispatch(updateCol(click));
  dispatch(updateName(name));

  return (
    <>
      {buttons.map((ele, key) => (
        <button
          className={ele.active ? "lp-cont btn-light" : "lp-cont"}
          onClick={(event) => handle_click2(event, key)}
          key={ele.id}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB-Sx_gozYYE4YjPyO_m-yRroAkPK2Encsgg&usqp=CAU"
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

export default Lp1;
