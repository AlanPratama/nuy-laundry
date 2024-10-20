import PropTypes from "prop-types";

const defaultBenefits = ["Bersih", "Wangi", "Cepat"];

const pricingArray = [
  {
    title: "Cuci Basah",
    price: 4_000,
    unit: "kg",
    benefits: [...defaultBenefits],
    icon: "",
  },
  {
    title: "Cuci Kering",
    price: 5_000,
    unit: "kg",
    benefits: [...defaultBenefits, "Packing"],
    icon: "",
  },
  {
    title: "Reguler",
    price: 6_000,
    unit: "kg",
    benefits: [...defaultBenefits, "Packing", "Setrika"],
    icon: "",
  },
  {
    title: "Exprezz",
    price: 8_000,
    unit: "kg",
    benefits: [...defaultBenefits, "Packing", "Setrika", "Sehari Selesai"],
    icon: "",
  },
];

export const Pricing = ({ waLink }) => {
  return (
    <div
      id="harga"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        data-aos="fade-in"
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        {/* <div> */}
        {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p> */}
        {/* </div> */}
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Harga</span>
          </span>{" "}
          <span className="text-deep-purple-accent-400">Terbaik</span> Kami
        </h2>
        {/* <p className="text-base text-gray-700 md:text-lg">
            *Note: Selain layanan di bawah, harga berdasarkan besarnya pesanan  
        </p> */}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 row-gap-5 sm:row-gap-10 lg:grid-cols-4 sm:mx-auto">
        {pricingArray.map((item, index) => (
          <div
            data-aos="fade-in"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            key={`pricing-${index}`}
            className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm"
          >
            <div className="mb-6">
              <div>
                <p className="text-base text-start font-bold tracking-wider uppercase">
                  {item.title}
                </p>
                <div className="flex items-center justify-start my-2">
                  <p className="text-3xl font-bold mr-1">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                  <div className="text-gray-700">/ {item.unit}</div>
                </div>
                {/* <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
                  <svg
                    className="w-8 h-8 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLidth="2"
                  >
                    <path
                      d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                      fill="none"
                      stroke="currentColor"
                    />
                    <path
                      d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                      fill="none"
                      stroke="currentColor"
                    />
                  </svg>
                </div> */}
              </div>
              <div>
                <p className="mb-2 text-base font-bold tracking-wide">
                  Benefit
                </p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, i) => (
                    <li
                      key={`benefit-${index}-${i}`}
                      className="flex items-center"
                    >
                      <div className="mr-2">
                        <svg
                          className="w-4 h-4 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeWidth="2"
                        >
                          <polyline
                            fill="none"
                            stroke="currentColor"
                            points="6,12 10,16 18,8"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            fill="none"
                            r="11"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="text-base text-gray-800">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <a
                href={waLink}
                target="_blank"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Pricing.propTypes = {
  waLink: PropTypes.string.isRequired,
};
