import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
