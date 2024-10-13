import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logout } from "../../features/AuthSlice";

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    console.log("Logout");
    dispatch(logout());
  };

  return (
    <div className="mb-2">
      <h1 className="font-bold text-4xl mb-5">Cart Page</h1>
      <button
        className="mt-4 py-2 px-2 w-32 rounded-full bg-accent text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default CartPage;
