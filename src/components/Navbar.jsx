import { useState } from "react";
import { images } from "../../public/assets";
import PropTypes from "prop-types";

export const Navbar = ({ waLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      id="top"
      data-aos="fade-down"
      className="px-4 py-6 mx-auto lg:py-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="#beranda"
              aria-label="beranda"
              title="beranda"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#layanan"
              aria-label="layanan kami"
              title="layanan kami"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Layanan
            </a>
          </li>
        </ul>
        <a
          href={waLink}
          target="_blank"
          aria-label="Nuy Laundry"
          title="Nuy Laundry"
          className="inline-flex items-center"
        >
          <img src={images.washingMachine} alt="Nuy Laundry" className="w-8" />
          <span className="ml-2 text-xl font-bold tracking-wide text-deep-purple-accent-400 uppercase">
            Nuy Laundry
          </span>
        </a>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="#harga"
              aria-label="harga"
              title="harga"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Harga
            </a>
          </li>
          <li>
            <a
              href="#lokasi-dan-kontak"
              aria-label="Lokasi dan Kontak"
              title="Lokasi dan Kontak"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Lokasi dan Kontak
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div
              style={{ zIndex: 999 }}
              className="absolute top-0 left-0 w-full"
            >
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href={waLink}
                      target="_blank"
                      aria-label="Nuy Laundry"
                      title="Nuy Laundry"
                      className="inline-flex items-center"
                    >
                      <img
                        src={images.washingMachine}
                        alt="Nuy Laundry"
                        className="w-8"
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-deep-purple-accent-400 uppercase">
                        Nuy Laundry
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#beranda"
                        aria-label="beranda"
                        title="beranda"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Beranda
                      </a>
                    </li>
                    <li>
                      <a
                        href="#layanan"
                        aria-label="layanan kami"
                        title="layanan kami"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Layanan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#harga"
                        aria-label="harga layanan"
                        title="harga layanan"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Harga
                      </a>
                    </li>
                    <li>
                      <a
                        href="#lokasi-dan-kontak"
                        aria-label="Lokasi dan Kontak"
                        title="Lokasi dan Kontak"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Lokasi dan Kontak
                      </a>
                    </li>
                    <li>
                      <a
                        href={waLink}
                        target="_blank"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        aria-label="Hubungi Kami"
                        title="Hubungi Kami"
                      >
                        Hubungi Kami
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  waLink: PropTypes.string.isRequired,
};
