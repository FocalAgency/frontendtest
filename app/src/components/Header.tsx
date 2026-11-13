import logo from "../assets/icons/izza.svg";
const header = () => {
  return (
    <header>
      <div className="flex items-center justify-between gap-6 p-3">
        <img src={logo} className="w-24 h-auto" alt="Izza" />
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          <a href="/menu">Menu</a>
          <a href="/family">Family</a>
          <a href="/findus">Find Us</a>
        </nav>
        <a href="/contact">Contact</a>
      </div>
    </header>
  );
};

export default header;
