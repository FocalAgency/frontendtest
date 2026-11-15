import offer from "../assets/images/apizzaimage.jpg";

const Offer = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 bg-[#6BDCE2] md:grid-cols-3">
            <div className="flex flex-col items-start justify-center gap-8 p-8 md:col-span-2">
              <span className="bg-white px-4 py-2 font-bold">
                Exclusive offer
              </span>

              <h2 className="text-2xl font-bold">
                Sign up to our news letter for exclusive offers for 2020
              </h2>
              <button
                type="button"
                className="inline-flex min-h-11 min-w-36 items-center border-2 border-black px-5 py-2 font-bold"
              >
                Read more
              </button>
            </div>
            <img
              src={offer}
              alt="Pizza topped with sausage, red onion and mustard"
              width={928}
              height={928}
              loading="lazy"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
