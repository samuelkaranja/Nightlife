import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AddDrinkPage,
  AddImagePage,
  AdminDashboard,
  Events,
  Gallery,
  Home,
  Menu,
} from "./pages";
import { InstallBanner, ScrollToTop } from "./components";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

function App() {
  return (
    <>
      <Router>
        {/* Global components */}
        <ScrollToTop />
        <InstallBanner />

        {/* Pages */}
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/drinks/new" element={<AddDrinkPage />} />
            <Route path="/admin/gallery/new" element={<AddImagePage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
