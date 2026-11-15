import { useEffect, useState } from "react";
import logo from "../assets/icons/izza.svg";
import { Phone } from "lucide-react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 -mb-20 h-20 text-white ${isScrolled ? "bg-black/95" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-full max-w-375 items-center justify-between gap-2 px-4 sm:gap-6 sm:px-6">
        <img
          src={logo}
          className="h-auto w-14 shrink-0 brightness-0 invert sm:w-24"
          alt="Izza"
        />
        <nav className="flex items-center gap-3 text-xs sm:gap-6 sm:text-base" aria-label="Main navigation">
          <a href="#menu" className="inline-flex min-h-11 items-center whitespace-nowrap">Menu</a>
          <a href="#family" className="inline-flex min-h-11 items-center whitespace-nowrap">Family</a>
          <a href="#findus" className="inline-flex min-h-11 items-center whitespace-nowrap">Find Us</a>
        </nav>
        <a href="#contact" className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center gap-2 sm:justify-end">
          <Phone size={18} aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">Contact</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
