import hero from "../assets/images/hero.jpg";
const Hero = () => {
  return (
    <section className="relative">
      <img src={hero} className="w-full h-auto" alt="Hero" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto w-full max-w-375 px-6">
          <h1 className="max-w-200 text-4xl leading-tight font-bold text-white md:text-6xl lg:text-8xl">
            There is always time for pizza...
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
