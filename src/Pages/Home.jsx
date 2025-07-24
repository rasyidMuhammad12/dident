import  Navbar  from "../Components/Navbar";
import Heroes from "../Components/Heroes";
import HowitWorks from "../Components/HowitWorks";
import Benefits from "../Components/Benefits";
import FAQ from "../Components/Faq";


function Home() {
  return (
    <>
      <Navbar />
      <Heroes />
      <HowitWorks />
      <Benefits />
      <FAQ />
    </>
  );
}

export default Home;
