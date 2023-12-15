import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../rows.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Row1 = () => {
  const { products } = useSelector((state) => state.product);
  const [add_arr, setAdd_arr] = useState(Array.from({ length: 17 }, () => 0));
  const dispatch = useDispatch();

  useEffect(() => {
    let item = localStorage.getItem("add_arr");
    if (item === null) {
      localStorage.setItem("add_arr", JSON.stringify(add_arr));
    } else {
      let parse_arr = JSON.parse(localStorage.getItem("add_arr"));
      setAdd_arr(parse_arr);
      let cnt = 0;
      for (let i = 0; i < products.length; i++) {
        cnt += products[i].price * parse_arr[i];
      }
      localStorage.setItem("totals", JSON.stringify(cnt));
    }
  }, [dispatch, products]);

  const incHandle = (index) => {
    setAdd_arr((prevArr) => {
      const newArr = [...prevArr];
      newArr[index] = newArr[index] + 1;
      localStorage.setItem("add_arr", JSON.stringify(newArr));
      return newArr;
    });
  };

  const decHandle = (index) => {
    if (add_arr[index] >= 1) {
      setAdd_arr((prevArr) => {
        const newArr = [...prevArr];
        newArr[index] = newArr[index] - 1;
        localStorage.setItem("add_arr", JSON.stringify(newArr));

        return newArr;
      });
    }
  };

  return (
    <>
      {products.map(
        (cont, index) =>
          index >= 0 &&
          index <= 8 && (
            <div className="products">
              <img src={cont.image} />
              <p className="pstyle">
                {" "}
                <FontAwesomeIcon
                  icon={faClock}
                  style={{ fontSize: "1vw", color: "green" }}
                />
              </p>
              <h3 className="h3style">{cont.name}</h3>
              <p className="pstyle">{cont.quantity}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1.6vw",
                  width: "100%",
                  height: "10%",
                }}
              >
                <p className="pstyle">₹{cont.price}</p>
                <div id={add_arr[index] === 0 ? "btn" : "revbtn"}>
                  {add_arr[index] !== 0 ? (
                    <>
                      <button
                        className="inc-dec"
                        onClick={() => decHandle(index)}
                      >
                        -
                      </button>
                      <button className="inc-dec">{add_arr[index]}</button>
                      <button
                        className="inc-dec"
                        onClick={() => incHandle(index)}
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="add-dec"
                        onClick={() => incHandle(index)}
                      >
                        Add
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </>
  );
};
export default Row1;
