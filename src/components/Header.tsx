import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "../supabase/supabaseClient";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  const [adminName, setAdminName] = useState<string>("");

  // Fetch admin name from Supabase
  useEffect(() => {
    const fetchAdmin = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) return console.error("Error fetching admin:", error);

      setAdminName(user?.user_metadata?.name || "Admin");
    };

    fetchAdmin();
  }, []);

  return (
    <header className="h-16 bg-[#101622] flex items-center px-4 sm:px-6">
      <button className="lg:hidden mr-4" onClick={onMenuClick}>
        <Menu size={22} color="green" />
      </button>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-semibold text-amber-500">
          Belawinski Admin Dashboard
        </span>

        <span className="text-white text-lg">Welcome {adminName}</span>
      </div>
    </header>
  );
};

export default Header;
