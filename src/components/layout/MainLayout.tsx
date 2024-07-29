import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const MaInLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="md:min-h-[calc(100vh-70px)">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MaInLayout;
