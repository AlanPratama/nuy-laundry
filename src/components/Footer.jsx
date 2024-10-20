import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../../public/assets";
import PropTypes from "prop-types";

const service1 = [
  `Cuci Basah`,
  "Cuci Kering",
  "Reguler",
  "Exprezz",
  "Bed Cover",
];

const service2 = ["Boneka", "Sepatu", "Karpet", "Selimut", "Sejadah"];

export const Footer = ({ waLink }) => {
  return (
    <div className="bg-neutral-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-1 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
              <div className="flex items-center justify-start mb-3 rounded-full">
                {/* <img
                  src={images.washingMachine}
                  alt="Nuy Laundry"
                  className="w-8"
                /> */}
                <p className="text-white font-sans text-3xl font-bold">
                  Nuy Laundry
                </p>
              </div>
              <ul className="mt-2 space-y-2">
                <li>
                  <p className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                    Spesialis laundry, layanan yang berkualitas, cepat, dan
                    harga terjangkau untuk memenuhi kebutuhan Anda!
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Layanan Kami
              </p>
              <ul className="mt-2 space-y-2">
                {service1.map((item, index) => (
                  <li key={`footer-service-1-${index}`}>
                    <p className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Layanan Kami Lainnya
              </p>
              <ul className="mt-2 space-y-2">
                {service2.map((item, index) => (
                  <li key={`footer-service-2-${index}`}>
                    <p className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-gray-500">
            © Copyright 2024 Nuy Laundry. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href={waLink}
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  waLink: PropTypes.string.isRequired,
};
