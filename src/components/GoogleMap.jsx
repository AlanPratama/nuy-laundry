import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images } from "../../public/assets";
import PropTypes from "prop-types";

export const GoogleMap = ({ waLink }) => {
  
  const contactInformation = [
    {
      title: "0857-7061-1154",
      icon: faWhatsapp,
      textColor: "text-green-500",
      bgColor: "bg-green-100",
      link: waLink,
      alignItems: "items-center",
    },
    {
      title:
        "Jl. Cipinang Jaya IIE, RT.10/RW.8, Cipinang Besar Selatan, Kecamatan Jatinegara, Kota Jakarta Timur, DKI Jakarta 13410",
      icon: faLocationDot,
      textColor: "text-blue-500",
      bgColor: "bg-blue-100",
      link: "https://maps.app.goo.gl/Y7BPz8TnWaccGn747",
      alignItems: "items-start",
    },
  ];

  return (
    <div
      id="lokasi-dan-kontak"
      className="px-4 py-16 md:px-24 lg:px-24 lg:py-20 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-x-6 gap-y-4"
    >
      <div className="w-full rounded-md shadow-md">
        <iframe
          title="Lokasi Google Maps Nuy Laundry"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.255250813159!2d106.87788977411373!3d-6.221198593766799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f300551d977d%3A0xe1e6428b315311ac!2sNuy%20Laundry!5e1!3m2!1sid!2sid!4v1774430101731!5m2!1sid!2sid"
          className="h-[340px] w-full rounded-md shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <div className="flex items-center justify-start mb-3 rounded-full">
          <img src={images.washingMachine} alt="Nuy Laundry Kiloan" className="w-8" />
          <p className="text-deep-purple-accent-400 font-sans text-3xl font-bold">
            Nuy Laundry
          </p>
        </div>
        <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Lokasi & Kontak{" "}
          <span className="text-deep-purple-accent-400">Layanan Kami</span>
        </h2>
        {contactInformation.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            key={`information-${index}`}
            className={`my-3 flex justify-start ${item.alignItems} gap-x-3`}
          >
            <div
              className={`${item.bgColor} rounded-full grid place-items-center min-h-10 min-w-10`}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`text-xl ${item.textColor}`}
              />
            </div>
            <p className="text-neutral-700 text-base">{item.title}</p>
          </a>
        ))}
        <a href={waLink} target="_blank">
          <button className="items-center justify-center h-11 px-6 mt-3 w-full sm:w-auto font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Hubungi Kami Sekarang LALALA
          </button>
        </a>
      </div>
    </div>
  );
};

GoogleMap.propTypes = {
  waLink: PropTypes.string.isRequired,
};
