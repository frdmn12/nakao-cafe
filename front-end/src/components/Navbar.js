import React from "react";
import LogoNakoa from "../assets/Logo-Nakoa.png";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

export default function Navbar() {
  // const [search, setSearch] = useState(false);

  return (
    <div className="flex bg-gray-200  backdrop-filter backdrop-blur-lg bg-opacity-30 border-gray-100 justify-between items-center p-3">
      <div className="text-white text-3xl">
        {/* <img src={LogoNakoa} alt="logo_nakoa" className="w-12" /> */}
        <h1>NAKOA</h1>
      </div>
      <ul className="flex gap-3 items-center text-white">
        <li>Drinks</li>
        <li>Food</li>
        <button className="border-2 rounded-full p-1.5">
          <FiShoppingBag />
        </button>
        <button className="border-2 rounded-full p-1.5">
          <FiSearch/>
        </button>
      </ul>
    </div>
  );
}

