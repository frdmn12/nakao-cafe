import { useState } from "react";
import { API_URL } from "../../../constant";
import { div } from "framer-motion/client";

type SelectedProductProps = {
  name: string;
  image: string;
  description: string;
  price: number;
  loc_origin: string;
  stock_qty: number;
  weight: number;
  roast_level: string;
  grind_option: string;
};

const SelectedProduct = ({
  name,
  image,
  description,
  price,
  loc_origin,
  stock_qty,
  weight,
  roast_level,
  grind_option,
}: SelectedProductProps) => {
  const [qty, setQty] = useState(1);

  const imgSrc = `${API_URL}/${image}`;
  // const uppserName = name.toUpperCase();
  return (
    <section className="flex flex-col text-center items-center gap-5 mx-10 w-[30rem]">
      <div className="flex flex-col items-center gap-2">
        <img src={imgSrc} className="w-[20rem]" alt="" />
        <p className="text-5xl font-bold">{name}</p>
        <p className="text-3xl font-medium">Rp. {price}</p>
        <p className="text-3xl font-medium">{weight}/gr</p>
      </div>
      <div className="flex gap-1 justify-center items-center">
        <div className="flex items-center gap-2 mx-3">
          <button
            className="px-5 py-2  border-2 border-accent  font-bold text-accent rounded-2xl"
            onClick={() => setQty(qty + 1)}
          >
            +
          </button>
          <p>{qty}</p>
          <button
            className="px-5 py-2  border-2 border-accent  font-bold text-accent rounded-2xl"
            onClick={() => (qty > 1 ? setQty(qty - 1) : "")}
          >
            -
          </button>
        </div>
        <button className="px-5 py-3 bg-[#3F72AF] font-bold text-white rounded-2xl">
          Add to Cart
        </button>
      </div>
      <div className="bg-muted text-white px-12 py-4 rounded-md w-[30rem] h-[28rem] text-left flex flex-col justify-around">
        <h1 className="text-2xl font-bold mt-5">Description</h1>
        <p>{description}</p>

        <h1 className="text-2xl font-bold mt-5">Product Details</h1>
        <table className="w-[100%]">
          <tbody>
            <tr>
              <td>
                <p className="font-semibold">From</p>
              </td>
              <td>
                <p>{loc_origin}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-medium">Stock</p>
              </td>
              <td>
                <p>{stock_qty}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-medium">Weight</p>
              </td>
              <td>
                <p>{weight} gr</p>
              </td>
            </tr>

            <tr>
              <td>
                <p className="font-medium">Roast Level</p>
              </td>
              <td>
                <p>{roast_level}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p className="font-medium">Grind Option</p>
              </td>
              <td>
                <p>{grind_option}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SelectedProduct;
