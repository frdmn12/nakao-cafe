import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="mx-1 my-1 px-7 py-4 rounded-2xl flex justify-around items-center bg-[#DBE2EF]">
      <Link to="/" className="text-2xl font-bold cursor-pointer">
        NAKAO
      </Link>
      <ul className="flex justify-between items-center gap-5">
        <li className="cursor-pointer hover:underline hover:decoration-wavy">
          <Link to={"/shop-coffe"}>Shop Coffe</Link>
        </li>
        <li className="cursor-pointer hover:underline hover:decoration-wavy">
          Visit Us
        </li>
        <li className="cursor-pointer hover:underline hover:decoration-wavy">
          FAQ
        </li>
      </ul>
      <ul className="flex justify-between items-center gap-5">
        <li>
          <Link to={"/login"}>
            <HiOutlineUser size={17} style={{ strokeWidth: "3px" }} />
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <HiOutlineShoppingCart size={17} style={{ strokeWidth: "3px" }} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
