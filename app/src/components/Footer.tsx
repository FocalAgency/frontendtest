import logo from "../assets/icons/izza.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/insta.svg";
import twitter from "../assets/icons/twitter.svg";
import linkedin from "../assets/icons/linkedin.svg";

const socialIcons = [
  { name: "Facebook", image: facebook },
  { name: "Instagram", image: instagram },
  { name: "Twitter", image: twitter },
  { name: "LinkedIn", image: linkedin },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-black py-14 text-white md:py-16">
      <div className="mx-auto grid max-w-375 grid-cols-1 gap-10 px-6 md:grid-cols-4 md:gap-8">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="Izza"
            width={122}
            height={54}
            className="h-auto w-24 brightness-0 invert"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            &copy;IZZA is a company limited by guarantee registered in England
            and Wales
          </p>
        </div>

        <div>
          <h2 className="border-b border-white/60 pb-1 font-bold">
            Contact Us
          </h2>
          <a
            href="tel:01234567890"
            className="mt-2 inline-flex min-h-11 items-center text-2xl font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            01234 567890
          </a>
        </div>

        <div>
          <h2 className="border-b border-white/60 pb-1 font-bold">Follow Us</h2>
          <ul
            aria-label="Social media"
            className="mt-4 flex items-center gap-5"
          >
            {socialIcons.map(({ name, image }) => (
              <li key={name}>
                <img
                  src={image}
                  alt={name}
                  width={24}
                  height={24}
                  className="h-5 w-5 object-contain brightness-0 invert"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
