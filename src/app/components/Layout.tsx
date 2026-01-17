import { Link, Outlet, useLocation } from "react-router-dom";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion, AnimatePresence } from "framer-motion";
import defaultBg from "../../../img/banhoc.jpg";
import aboutBg from "../../../img/bgr3.jpg";
import resumeBg from "../../../img/bgr3.jpg";
import portfolioBg from "../../../img/bgr3.jpg";

export default function Layout() {
  const location = useLocation();

  const getBackground = () => {
    switch (location.pathname) {
      case "/about":
        return aboutBg;
      case "/resume":
        return resumeBg;
      case "/portfolio":
        return portfolioBg;
      default:
        return defaultBg;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={getBackground()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={getBackground()}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="flex items-center justify-between px-8 lg:px-16 py-6">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-white/80 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-white/80 transition-colors"
            >
              About
            </Link>
            <Link
              to="/resume"
              className="text-white hover:text-white/80 transition-colors"
            >
              Resume
            </Link>
            <Link
              to="/portfolio"
              className="text-white hover:text-white/80 transition-colors"
            >
              Portfolio
            </Link>
          </div>
          <div className="text-white">+84 0852089998</div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center px-8 lg:px-16 pb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
