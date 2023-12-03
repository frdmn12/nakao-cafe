import React from "react";
import LogoNakoa from "../assets/Logo-Nakoa.png";
import { FiShoppingBag, FiSearch } from "react-icons/fi";

export default function Navbar() {
  // const [search, setSearch] = useState(false);

  return (
    <div className="flex  justify-between items-center p-3">
      <div>
        <img src={LogoNakoa} alt="logo_nakoa" className="w-12" />
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
