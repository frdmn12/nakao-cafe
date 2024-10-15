import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { logout } from "../../features/AuthSlice";

export default function ProfilePage() {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = () => {
    console.log("Logout");
    dispatch(logout());
  };


  return (
    <div>
      Profile Page
      <button
        className="mt-4 py-2 px-2 w-32 rounded-full bg-accent text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
