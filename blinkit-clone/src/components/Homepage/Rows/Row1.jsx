import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import "../rows.css";
import {get_total} from "../../../Store/cart_slice";

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
     for(let i=0;i<products.length;i++){
        cnt += products[i].price * parse_arr[i];
     }
     localStorage.setItem("totals",JSON.stringify(cnt));
    }
  }, [dispatch,products]);


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
                <p className="pstyle">Time</p>
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

/*const content = [
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/xxl/104615_9-amul-processed-cheese-cubes.jpg",
    name: "Amul Cubes",
    quant: "200g",
    price: "₹127",
  },
  {
    image:
      "https://www.jiomart.com/images/product/original/490983569/mother-dairy-classic-dahi-400-g-cup-product-images-o490983569-p590041365-0-202203141904.jpg",
    name: "Mother Dairy Curd",
    quant: "1kg",
    price: "₹77",
  },
  {
    image: "https://m.media-amazon.com/images/I/71RvCTpSIRL._SL1500_.jpg",
    name: "Nestle Milkmaid",
    quant: "380g",
    price: "₹130",
  },
  {
    image:
      "https://frugivore-storage.s3.amazonaws.com/media/package/img_one/2019-08-30/Britannai_Whole_Wheat_Bread.jpg",
    name: "Britannia Bread",
    quant: "400g",
    price: "₹50",
  },
  {
    image:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/19512a.jpg?ts=1647923044",
    name: "Amul Taaza Milk",
    quant: "500ml",
    price: "₹25",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/xxl/40096747_8-amul-malai-fresh-paneer.jpg",
    name: "Amul Paneer",
    quant: "200g",
    price: "₹80",
  },
  {
    image:
      "https://www.bigbasket.com/media/uploads/p/xxl/229136-2_2-amul-cheese-slices.jpg",
    name: "Amul Cheese Slices",
    quant: "500g",
    price: "₹400",
  },
  {
    image: "https://m.media-amazon.com/images/I/61yGKFuNTNL._SL1080_.jpg",
    name: "Amul Masti Dahi",
    quant: "400g",
    price: "₹40",
  },
  {
    image:
      "https://5.imimg.com/data5/ANDROID/Default/2020/12/QJ/SW/PP/60211147/product-jpeg-500x500.jpg",
    name: "Fresho Farm Eggs",
    quant: "1 tray (30pc.)",
    price: "₹150",
  },
];*/
