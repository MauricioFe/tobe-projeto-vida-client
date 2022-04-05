import BannerEvents from "../components/BannerEvents";
import BannerHome from "../components/BannerHome";
import BannerWarranty from "../components/BannerWarranty";
import Benefits from "../components/Benefits";
import Courses from "../components/Courses";
import Contacts from "../components/Contacts";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BannerHome/>
        <Experience />
        <Benefits />
        <BannerWarranty />
        <Courses />
        <BannerEvents/>
        <Contacts/>
        <Footer/>
      </main>
    </>
  )
}