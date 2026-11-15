import pizza1 from "../assets/images/apizzaimage.jpg";
import pizza2 from "../assets/images/bpizzaimage.jpg";

export const Menu = () => {
  return (
    <div>
      <section id="menu" className="bg-[#6BDCE2] py-16 md:py-24">
        <div className="mx-auto max-w-375 px-6">
          <h2 className="text-center text-4xl font-bold">Menu</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <button
              type="button"
              className="min-h-11 border-2 border-black px-5 py-2 font-bold"
            >
              Pizza
            </button>
            <button
              type="button"
              className="min-h-11 border-2 border-black px-5 py-2 font-bold"
            >
              Calzone
            </button>
            <button
              type="button"
              className="min-h-11 border-2 border-black px-5 py-2 font-bold"
            >
              Desert
            </button>
            <button
              type="button"
              className="min-h-11 border-2 border-black px-5 py-2 font-bold"
            >
              Drinks
            </button>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <article className="bg-white ">
              <img
                src={pizza1}
                alt="Pizza topped with sausage, red onion and mustard"
                width={928}
                height={928}
                loading="lazy"
                className="block h-auto w-full"
              />
              <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold">Pizza</h3>
                <p className="leading-relaxed text-slate-700">
                  Tomato sauce, mozzarella, hot dog, caramelised onions, red
                  onions and french's mustard drizzle.
                </p>
              </div>
            </article>
            <article className="bg-white ">
              <img
                src={pizza2}
                alt="Pizza topped with vegetables and a stuffed crust"
                width={928}
                height={928}
                loading="lazy"
                className="block h-auto w-full"
              />
              <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold">Drinks</h3>
                <p className="leading-relaxed text-slate-700">
                  Mozzarella, BBQ jackfruit, peppers, red onions, sweetcorn and
                  a BBQ drizzle.
                </p>
                <button
                  type="button"
                  className="mt-6 border-2 border-black py-2 px-4 font-bold"
                >
                  Full article
                </button>
              </div>
            </article>
            <article className="bg-white ">
              <img
                src={pizza1}
                alt="Pizza topped with sausage, red onion and mustard"
                width={928}
                height={928}
                loading="lazy"
                className="block h-auto w-full"
              />
              <div className="p-6">
                <h3 className="mb-4 text-2xl font-bold">Calzone</h3>
                <p className="leading-relaxed text-slate-700">
                  Tomato sauce, mozzarella, hot dog, caramelised onions, red
                  onions and french's mustard drizzle.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
