import {
  faBolt,
  faHandSparkles,
  faMoneyBillWave,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { images } from "../../public/assets";

const sloganArray = [
  {
    icon: faHandSparkles,
    title: "Bersih",
  },
  {
    icon: faSprayCanSparkles,
    title: "Wangi",
  },
  {
    icon: faBolt,
    title: "Cepat",
  },
  {
    icon: faMoneyBillWave,
    title: "Harga Terjangkau",
  },
];

export const Header = ({ waLink }) => {
  return (
    <>
      <div id="beranda" className="relative flex flex-col py-1 lg:pt-0 lg:pb-0">
        <div
          data-aos="fade-left"
          className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0"
        >
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            loading="lazy"
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={images.hero}
            alt="Nuy Laundry"
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div
            data-aos="fade-right"
            className="mt-4 lg:my-40 lg:max-w-lg lg:pr-5"
          >
            {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p> */}
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Spesialis Laundry{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Bersih dan Wangi
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Spesialis laundry, layanan yang berkualitas, cepat, dan harga
              terjangkau untuk memenuhi kebutuhan Anda!
            </p>
            <a
              style={{ zIndex: 999 }}
              href={waLink}
              target="_blank"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      <div style={{ zIndex: 10 }} className="bg-transparent sm:-mt-32">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div
            data-aos="fade-up"
            data-aos-offset="0"
            className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sloganArray.map((item, index) => (
              <div
                key={`slogan-${index}`}
                className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-md group hover:shadow-lg"
              >
                <div className="flex items-center justify-start sm:justify-center gap-x-2 p-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-deep-purple-accent-400 text-xl"
                    />
                  </div>
                  <p className="font-bold text-neutral-700 text-base">
                    {item.title}
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  waLink: PropTypes.string.isRequired,
};
