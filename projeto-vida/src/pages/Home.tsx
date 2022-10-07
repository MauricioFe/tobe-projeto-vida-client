import BannerHome from "../components/LandPage/BannerHome/BannerHome";
import BannerWarranty from "../components/LandPage/BannerWarranty/BannerWarranty";
import Benefits from "../components/LandPage/Benefits/Benefits";
import Contacts from "../components/LandPage/Contacts/Contacts";
import Courses from "../components/LandPage/Courses/Courses";
import BannerEvents from "../components/LandPage/EventSection/BannerEvents";
import Experience from "../components/LandPage/Experience/Experience";
import Footer from "../components/LandPage/Footer/Footer";
import Header from "../components/LandPage/Header/Header";

export default function Home() {
  return ( 
    <>
      <Header />
      <main style ={{padding:'0 2rem'}}>
        <BannerHome />
        <Experience />
        <Benefits />
        <BannerWarranty />
        <Courses />
        <BannerEvents />
        <Contacts />
        <Footer />
      </main>
    </>
  )
}