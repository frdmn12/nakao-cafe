// rfc
import React from "react";
import Navbar from "../../components/Navbar";
import TableCart from "./components/TableCart";
import Footer from "../../components/Footer";

export default function CartPage() {
  return (
    <div className="flex flex-col" >
      <div className="bg-black">
        <Navbar />
      </div>
      <div className="m-10 flex flex-col justify-start item-center gap-5 h-[100vh]">
        <h1 className="text-5xl font-medium drop-shadow-lg text-left">
          Your Shopping Cart
        </h1>
        <TableCart />
      </div>
      <Footer/>
    </div>
  );
}
