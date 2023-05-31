import React, { useState } from "react";
import "../products.css";
import { updateCol, updateName } from "../../../Store/click_slice";
import { useDispatch, useSelector } from "react-redux";

const Lp3 = () => {
  const [buttons, setButtons] = useState([
    { name: "Chips", img: "", active: true, id: 0 },
    { name: "Farsan", img: "", active: false, id: 1 },
    { name: "Namkeen", img: "", active: false, id: 2 },
    { name: "Potato Balls", img: "", active: false, id: 3 },
    { name: "Tomato Balls", img: "", active: false, id: 4 },
    { name: "Doritos", img: "", active: false, id: 5 },
    { name: "Nachos", img: "", active: false, id: 6 },
    { name: "Potato Wedges", img: "", active: false, id: 7 },
    { name: "Cheese Balls", img: "", active: false, id: 8 },
    { name: "Pringles", img: "", active: false, id: 9 },
  ]);

  let [left_active, setLeft_active] = useState(0);

  const handle_click2 = (event, index) => {
    setLeft_active(index);
    setButtons((prevButtons) => {
      return prevButtons.map((button) => {
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
            src="https://previews.123rf.com/images/draghicich/draghicich1206/draghicich120600210/13981662-chips-nachos-and-curls-snacks-on-a-wooden-background.jpg"
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

export default Lp3;
