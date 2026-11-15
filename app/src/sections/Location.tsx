import story from "../assets/images/asignpostimage.jpg";

const Location = () => {
  return (
    <div>
      <section id="findus" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-375 px-6">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl leading-tight font-bold md:text-8xl">
                OUR STORY
              </h2>
              <p className="leading-relaxed text-slate-700">
                Phasellus ultrices, massa vel commodo maximus, ex metus accumsan
                ante, id maximus turpis augue id lacus. Nullam porttitor mauris
                nec fermentum fermentum. Pellentesque habitant morbi
              </p>
              <div className="flex flex-col items-start gap-4">
                <button
                  type="button"
                  className="inline-flex min-h-11 min-w-36 items-center border border-black px-5 py-2 font-bold"
                >
                  View Map
                </button>
              </div>
            </div>
            <div>
              <img
                src={story}
                alt="Our Story"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
