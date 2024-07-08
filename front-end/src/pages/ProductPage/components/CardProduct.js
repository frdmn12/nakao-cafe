import React, { useEffect, useState } from "react";
import { URL_API } from "../../../api/data";
import axios from "axios";

export const CardProduct = ({ name, image, description, qty, price, id }) => {
  const [user, setUser] = useState({});
  const [productId, setProductId] = useState(0);
  const [qtyProduct, setQtyProduct] = useState(1);

  const addCart = (productId) => {
    console.log(productId);

    try {
      axios.post(
        `${URL_API}/carts`,
        {
          userId: user.id,
          productId: productId,
          qty: qtyProduct,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // get userId
    
  }, [])

  return (
    <div className="relative flex w-72 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={image} className="h-full w-full object-cover" alt="Product" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {price}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {description}
        </p>
      </div>
      <div className="p-6 pt-0 flex justify-around flex-col text-center gap-4">
        {/* <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          Qty : {qty}
        </p> */}
        <button
          className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => addCart(id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
