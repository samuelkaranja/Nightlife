import { Outlet } from "react-router-dom";
import { Footer, NavBar } from "../components";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
