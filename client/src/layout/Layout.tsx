import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className="font-poppins bg-[#F9F7F7]">
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Layout;
