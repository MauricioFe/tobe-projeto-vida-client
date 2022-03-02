import BannerHome from "../components/BannerHome";
import BannerWarranty from "../components/BannerWarranty";
import Benefits from "../components/Benefits";
import Carousel from "../components/Carousel";
import Experience from "../components/Experience";
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
        <Carousel />
      </main>
    </>
  )
}