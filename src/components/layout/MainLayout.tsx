import { Outlet } from "react-router-dom";

const MaInLayout = () => {
  return (
    <div>
      <div className="md:min-h-[calc(100vh-70px)">
        <Outlet />
      </div>
    </div>
  );
};

export default MaInLayout;
