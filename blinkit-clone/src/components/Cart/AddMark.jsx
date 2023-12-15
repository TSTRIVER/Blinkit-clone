import React, { useEffect, useState} from "react";
import "./addmark.css";
import { useDispatch } from "react-redux";
import { get_items } from "../../Store/cart_slice";

const AddMark = () => {
  const [flag, setFlag] = useState(0);
  const [cnt, setCnt] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let item = localStorage.getItem("add_arr");
    let count = 0;
    if (item !== null) {
      let parse_item = JSON.parse(item);
      for (let i = 0; i < parse_item?.length; i++) {
        if (parse_item[i] !== 0) {
          count++;
        }
      }
      setCnt(count);
      const sum = parse_item.reduce((total, value) => total + value, 0);
      if (sum === 0) {
        setFlag(0);
      } else {
        setFlag(1);
      }
    }
    dispatch(get_items(count));
  }, [dispatch, setCnt]);

  return (
    <>
      {flag !== 0 ? (
        <div id="cart-circle">
          <p>{cnt}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AddMark;
