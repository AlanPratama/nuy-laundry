import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../../public/assets";

const serviceArray = [
  "Cuci Kering",
  "Cuci Basah",
  "Reguler",
  "Exprezz",
  "Bed Cover",
  "Boneka",
  "Sepatu",
  "Karpet",
  "Selimut",
  "Sejadah",
];

export const Service = () => {
  return (
    <div
      id="layanan"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
        >
          <div className="flex items-center justify-start mb-4 rounded-full">
            <img
              src={images.washingMachine}
              alt="Nuy Laundry"
              className="w-8"
            />
            <p className="text-deep-purple-accent-400 font-sans text-3xl font-bold">
              Nuy Laundry
            </p>
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Layanan{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Kami
              </span>
            </h2>
            <div className="flex flex-wrap justify-start items-center gap-3">
              {serviceArray.map((item, index) => (
                <div
                  key={`service-${index}`}
                  className="flex justify-start items-center gap-x-2 bg-white p-2 rounded-md shadow-md"
                >
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-neutral-600 text-xl"
                  />
                  <p className="text-neutral-600 text-xl font-sans">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <a
              href="#harga"
              aria-label="harga"
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-lg"
            >
              Lihat Harga
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-offset="200"
          className="flex items-center justify-center -mx-4 lg:pl-8"
        >
          <div className="flex flex-col items-end px-3">
            <img
              loading="lazy"
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={images.imageService1}
              alt="Nuy Laundry"
            />
            <img
              loading="lazy"
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src={images.imageService2}
              alt="Nuy Laundry"
            />
          </div>
          <div className="px-3">
            <img
              loading="lazy"
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={images.imageService3}
              alt="Nuy Laundry"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
