import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  AddDrinkPage,
  AddImagePage,
  AdminDashboard,
  DrinkListPage,
  EditDrink,
  Events,
  Gallery,
  Home,
  ImageListPage,
  Login,
  Menu,
} from "./pages";
import { InstallBanner, ScrollToTop } from "./components";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import AdminRoute from "./routes/AdminRoute";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <InstallBanner />

        <Routes>
          {/* Main site pages */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
          </Route>

          {/* Public admin login */}
          <Route path="/admin/login" element={<Login />} />

          {/* Protected admin routes */}
          <Route element={<AdminRoute />}>
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/drinks/new" element={<AddDrinkPage />} />
              <Route path="/admin/gallery/new" element={<AddImagePage />} />
              <Route path="/admin/drinklist" element={<DrinkListPage />} />
              <Route path="/admin/imagelist" element={<ImageListPage />} />
              <Route path="/admin/drinks/edit/:id" element={<EditDrink />} />
            </Route>
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
