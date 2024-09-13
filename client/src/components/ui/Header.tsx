import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <nav className="mx-1 my-2 px-7 py-4 rounded-xl flex justify-between items-center gap-2  bg-[#DBE2EF]">
      <h1 className="text-2xl font-bold cursor-pointer">NAKAO</h1>
      <ul className="flex justify-center items-center gap-5">
        <li className="cursor-pointer">Shop Coffe</li>
        <li className="cursor-pointer">Visit Us</li>
        <li className="cursor-pointer">FAQ</li>
      </ul>
      <ul className="flex justify-center items-center gap-5">
        <li>
          <HiOutlineUser size={17}  style={{ strokeWidth: "3px" }} />
        </li>
        <li>
          <HiOutlineShoppingCart size={17} style={{ strokeWidth: "3px" }} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
