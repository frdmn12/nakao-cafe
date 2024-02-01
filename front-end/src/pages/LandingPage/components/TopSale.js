import React from "react";
import { TopsSaleListProduct } from "../../../variables/general";
import { Link } from "react-router-dom";

export const TopSale = () => {
  const categoryList = [
    "Espresso",
    "Seasonal",
    "Non-Coffe",
    "Tea",
    "Cake",
    "Bread",
  ];

  const displayCategory = categoryList.map((category) => {
    return (
      <button
        type="button"
        className="text-md border-2 border-gray-900 rounded-2xl p-3 hover:bg-slate-100"
      >
        {category}
      </button>
    );
  });
  return (
    <div className="my-5 p-10">
      <div className="flex flex-row justify-between gap-1">
        <h1 className="text-7xl font-medium">Our Best Sellers</h1>
        <div className="w-80">
          <p className="text-md ">
            Discover our top-rated products that are loved by our customers.
            Shop now and experience the best quality and taste.
          </p>
        </div>
        <Link to={"/products"}>
          <button className="border-2 border-gray-900 hover:bg-slate-100  p-3 rounded-full">
            View All Products
          </button>
        </Link>
      </div>
      <div className="flex gap-4 my-4">{displayCategory}</div>
      <div className="flex my-10 gap-6 justify-evenly">
        {TopsSaleListProduct.map((product) => {
          return (
            <div className="flex flex-col gap-1">
              <img
                className="w-[400px] h-[400px] bg-cover object-cover m-5 rounded-lg drop-shadow-md brightness-75"
                src={product.image}
                alt="topsale"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
