import React, { useState } from "react";
import "../products.css";
import { useDispatch } from "react-redux";
import { updateCol, updateName } from "../../../Store/click_slice";
import { useSelector } from "react-redux";

const Lp2 = () => {
  const [buttons, setButtons] = useState([
    { name: "Milk", img: "", active: true, id: 0 },
    { name: "Bread & Pav", img: "", active: false, id: 1 },
    { name: "Cereals & Oats", img: "", active: false, id: 2 },
    { name: "Muesli & Granola", img: "", active: false, id: 3 },
    { name: "Paneer & Tofu", img: "", active: false, id: 4 },
    { name: "Curd & Yogurt", img: "", active: false, id: 5 },
    { name: "Butter & More", img: "", active: false, id: 6 },
    { name: "Cheese", img: "", active: false, id: 7 },
    { name: "Choco Spreads", img: "", active: false, id: 8 },
    { name: "Jam & Honey", img: "", active: false, id: 9 },
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
            src="https://www.bigbasket.com/media/uploads/p/xxl/306926-2_4-amul-homogenised-toned-milk.jpg"
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

export default Lp2;
