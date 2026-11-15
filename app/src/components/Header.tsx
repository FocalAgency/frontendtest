import logo from "../assets/icons/izza.svg";
import { Phone } from "lucide-react";
const header = () => {
  return (
    <header className="sticky top-0 z-50 -mb-20 h-20 bg-transparent text-white ">
      <div className="mx-auto flex max-w-375 items-center justify-between gap-6 p-6">
        <img
          src={logo}
          className="w-24 h-auto brightness-0 invert"
          alt="Izza"
        />
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <a href="/menu">Menu</a>
          <a href="/family">Family</a>
          <a href="/findus">Find Us</a>
        </nav>
        <a href="/contact" className="flex items-center gap-2">
          <Phone size={18} aria-hidden="true" />
          Contact
        </a>
      </div>
    </header>
  );
};

export default header;
