import { Menu } from "lucide-react";

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="h-16 bg-white flex items-center px-4 sm:px-6">
      <button className="lg:hidden mr-4" onClick={onMenuClick}>
        <Menu size={22} color="green" />
      </button>

      <h1 className="text-2xl font-semibold text-amber-500">
        Belawinski Admin Dashboard
      </h1>
    </header>
  );
};

export default Header;
