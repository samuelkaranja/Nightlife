import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/Belawinski/Logo.jpg";

type NavLinkItem = {
  name: string;
  href: string;
  type: "route" | "anchor";
};

const navLinks: NavLinkItem[] = [
  { name: "Home", href: "/", type: "route" },
  { name: "Menu", href: "/menu", type: "route" },
  { name: "Gallery", href: "/gallery", type: "route" },
  { name: "Events", href: "/events", type: "route" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:border-b lg:border-dotted lg:border-gray-50">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-2xl font-bold text-amber-500 tracking-wide"
          >
            <img
              src={Logo}
              alt="Belawinski Bar Logo"
              className="h-9 w-9 object-contain"
            />
            <span>Belawinski Cocktail Bar</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-200 hover:text-amber-500 transition duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-200 hover:text-amber-500 transition duration-300"
                >
                  {link.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 px-4 pb-6 pt-2 space-y-4 text-center">
          {navLinks.map((link) =>
            link.type === "route" ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 text-lg hover:text-amber-500 transition"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-200 text-lg hover:text-amber-500 transition"
              >
                {link.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
