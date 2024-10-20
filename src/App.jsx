import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { GoogleMap } from "./components/GoogleMap";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Service } from "./components/Service";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { BackToTop } from "./components/BackToTop";

function App() {
  
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, [])

  const waLink = "https://wa.me/6285770611154?text=Halo%20kak,%20saya%20ingin%20bertanya%20mengenai%20layanan%20Nuy%20Laundry."

  return (
    <>
      <BackToTop/>
      <Navbar waLink={waLink} />
      <Header waLink={waLink} />
      <Service waLink={waLink} />
      <Pricing waLink={waLink} />
      <GoogleMap waLink={waLink} />
      <Footer waLink={waLink} />
    </>
  );
}

export default App;
