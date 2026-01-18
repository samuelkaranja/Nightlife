import { Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Logout failed:", error.message);
      return;
    }

    // Redirect to login page
    navigate("/admin/login");
  };

  return (
    <header className="h-16 bg-[#101622] flex items-center justify-between px-4 sm:px-6">
      {/* Left side */}
      <div className="flex items-center">
        <button className="lg:hidden mr-4 hover:cursor-pointer" onClick={onMenuClick}>
          <Menu size={22} color="green" />
        </button>

        <span className="text-2xl font-semibold text-amber-500">
          Belawinski Admin Dashboard
        </span>
      </div>

      {/* Right side */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600
                   text-white px-4 py-2 rounded-lg text-sm transition"
      >
        <LogOut size={16} />
        Logout
      </button>
    </header>
  );
};

export default Header;
