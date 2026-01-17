import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import zaloIcon from "../../../img/icons8-zalo-50.png";

export default function Home() {
  return (
    <div className="max-w-2xl">
      {/* Hero Text */}
      <div className="mb-12">
        <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none mb-4">
          Bùi Hoàng Anh
        </h1>
        <p className="text-3xl lg:text-4xl font-light tracking-wide text-white/90">
          Software Developer
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-16">
        <Link to="/resume">
          <button className="px-8 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
            Resume
          </button>
        </Link>
        <Link to="/portfolio">
          <button className="px-8 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
            Portfolio
          </button>
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center gap-5">
        <a
          href="https://www.facebook.com/hoang.anh.68752/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
          aria-label="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>

        <a
          href="https://zalo.me/0852089998"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/40 hover:border-white hover:bg-white/10 transition-all duration-300"
          aria-label="Zalo"
        >
          <img
            src={zaloIcon}
            alt="Zalo"
            className="w-5 h-5 brightness-0 invert"
          />
        </a>
      </div>
    </div>
  );
}
