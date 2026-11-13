import logo from "../assets/icons/izza.svg";
import { Phone } from "lucide-react";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 -mb-20 h-20 bg-transparent text-white bold ">
      <div className="mx-auto grid h-full max-w-[1500px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-4 sm:gap-6 sm:px-6">
        <img
          src={logo}
          className="h-auto w-16 brightness-0 invert sm:w-24"
          alt="Izza"
        />
        <nav className="flex items-center gap-3 text-xs font-bold sm:gap-6 sm:text-base" aria-label="Main navigation">
          <a href="/menu" className="inline-flex min-h-11 items-center whitespace-nowrap">Menu</a>
          <a href="/family" className="inline-flex min-h-11 items-center whitespace-nowrap">Family</a>
          <a href="/findus" className="inline-flex min-h-11 items-center whitespace-nowrap">Find Us</a>
        </nav>
        <a
          href="/contact"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 justify-self-end font-bold sm:justify-end"
        >
          <span className="sr-only sm:not-sr-only">contact</span>
          <Phone size={18} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};

export default Header;
