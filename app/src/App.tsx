import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Location from "./sections/Location";
import Menu from "./sections/Menu";
import Offer from "./sections/Offer";
import Story from "./sections/Story";

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-black focus:px-5 focus:py-3 focus:font-bold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Menu />
        <Story />
        <Offer />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;
