import { Instagram, Music2, MessageCircle } from "lucide-react";
// Music2 used as a TikTok-style icon fallback

const Footer: React.FC = () => {
  return (
    <footer className="w-full text-gray-300">
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left">
            {/* Logo / Name */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {/* Replace with your logo image if available */}
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-black font-bold">
                B
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Belawinski Bar
              </h3>
            </div>

            {/* Location */}
            <p className="mt-4 text-sm text-gray-400">
              Coop-Joint near Cooperative Bank
            </p>

            {/* Opening Hours */}
            <p className="mt-2 text-sm text-gray-400">
              Open: Mon–Sun, 5PM – 11PM
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              aria-label="Instagram"
              className="p-3 rounded-full bg-white/10 hover:bg-amber-600 transition"
            >
              <Instagram className="w-5 h-5 text-white" />
            </a>

            <a
              href="#"
              aria-label="TikTok"
              className="p-3 rounded-full bg-white/10 hover:bg-amber-600 transition"
            >
              <Music2 className="w-5 h-5 text-white" />
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="p-3 rounded-full bg-white/10 hover:bg-amber-600 transition"
            >
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Belawinski Bar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
