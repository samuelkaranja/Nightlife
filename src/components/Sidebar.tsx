import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <aside
      className={`
        fixed lg:static z-50
    w-64 bg-[#101622] text-white
    flex flex-col p-6
    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0

    h-screen lg:h-screen
      `}
    >
      {/* Mobile close button */}
      <div className="flex items-center justify-between mb-10 lg:hidden">
        <Link to="/" className="text-2xl font-semibold underline">
          Belawinski Bar
        </Link>
        <button onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Desktop title */}
      <Link
        to="/"
        className="text-2xl font-semibold mb-10 hidden lg:block underline"
      >
        Belawinski Bar
      </Link>

      <nav className="space-y-3 text-sm">
        <NavLink
          to="/admin/dashboard"
          onClick={onClose}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 transition ${
              isActive ? "bg-emerald-500 text-white" : "hover:bg-neutral-800"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/drinks/new"
          onClick={onClose}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 transition ${
              isActive ? "bg-emerald-500 text-white" : "hover:bg-neutral-800"
            }`
          }
        >
          Add Drink
        </NavLink>

        <NavLink
          to="/admin/gallery/new"
          onClick={onClose}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 transition ${
              isActive ? "bg-emerald-500 text-white" : "hover:bg-neutral-800"
            }`
          }
        >
          Add Gallery Image
        </NavLink>

        <div className="border-b border-gray-200 border-dotted my-5"></div>

        <NavLink
          to="/admin/drinklist"
          onClick={onClose}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 transition ${
              isActive ? "bg-emerald-500 text-white" : "hover:bg-neutral-800"
            }`
          }
        >
          Drinks List
        </NavLink>

        <NavLink
          to="/admin/imagelist"
          onClick={onClose}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 transition ${
              isActive ? "bg-emerald-500 text-white" : "hover:bg-neutral-800"
            }`
          }
        >
          Gallery Images List
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
