import React from "react";
import Navbar from "../../components/Navbar";
import { CardProduct } from "./components/CardProduct";
import Footer from "../../components/Footer";

export default function ProductPage() {
  const bgStyles = {
    backgroundColor : "#fefeff",
    backgroundImage: "linear-gradient(45deg, #fefeff 0%, #000000 100%)",
  };

//   background-color: #fefeff;
// background-image: linear-gradient(45deg, #fefeff 0%, #000000 100%);


  const categoryList = ["Espresso", "Seasonal", "Non-Coffe", "Tea"];
  const displayCategory = categoryList.map((category) => {
    return (
      <button
        type="button"
        className="text-md border-2 border-white rounded-2xl p-3 hover:bg-slate-600 drop-shadow-lg"
      >
        {category}
      </button>
    );
  });

  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div className=" text-white  flex flex-col gap-6">
        <div className="bg-black p-5">
          <h1 className="text-5xl font-medium drop-shadow-lg">Drink</h1>
          <div className="flex gap-2 mt-3">{displayCategory}</div>
          <div className="flex flex-wrap gap-5 my-7">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
        <div className="text-black p-5">
          <h1 className="text-5xl font-medium drop-shadow-lg">Food</h1>
          <div className="flex gap-2 mt-3">{displayCategory}</div>
          <div className="flex flex-wrap gap-5 mt-7">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </div>
        </div>
      <Footer/>
      </div>
    </div>
  );
}
