import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
const Layout = () => {
  return (
    <div className="font-poppins bg-[#F9F7F7]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
