import React, { useState } from "react";
import "../products.css";
import { updateCol, updateName } from "../../../Store/click_slice";
import { useDispatch, useSelector } from "react-redux";

const Lp4 = () => {
  const [buttons, setButtons] = useState([
    { name: "Coca-Cola,Pepsi", img: "", active: true, id: 0 },
    { name: "Fanta,Limca", img: "", active: false, id: 1 },
    { name: "Mountain Dew,Sprite", img: "", active: false, id: 2 },
    { name: "Sports Drink", img: "", active: false, id: 3 },
    { name: "Milkshakes", img: "", active: false, id: 4 },
    { name: "Masala Drinks", img: "", active: false, id: 5 },
    { name: "Fruit Juice", img: "", active: false, id: 6 },
    { name: "Buttermilk", img: "", active: false, id: 7 },
    { name: "Flavored Milk", img: "", active: false, id: 8 },
    { name: "Coconut Water", img: "", active: false, id: 9 },
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_NpwtdoGLQ4Zc9-LEb2RfszTTJRqU9-AbWHSN1TMZuJCJMHvEJb6wAGMfqncM0N1yZZs&usqp=CAU"
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

export default Lp4;
