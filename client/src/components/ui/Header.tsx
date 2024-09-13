import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi";

const Header = () => {
  return (
    <nav className="mx-1 my-1 px-7 py-4 rounded-2xl flex justify-around items-center bg-[#DBE2EF]">
      <h1 className="text-2xl font-bold cursor-pointer">NAKAO</h1>
      <ul className="flex justify-between items-center gap-5">
        <li className="cursor-pointer hover:underline hover:decoration-wavy">Shop Coffe</li>
        <li className="cursor-pointer hover:underline hover:decoration-wavy">Visit Us</li>
        <li className="cursor-pointer hover:underline hover:decoration-wavy">FAQ</li>
      </ul>
      <ul className="flex justify-between items-center gap-5">
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
