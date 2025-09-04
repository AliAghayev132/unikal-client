import Doctors from "../(home)/components/Doctors";
import FAQ from "../(home)/components/FAQ";
import BestService from "./components/BestService";
import ContactNow from "./components/ContactNow";
import FotoGallery from "./components/FotoGallery";
import Header from "./components/Header";
import OurMission from "./components/OurMission";

export const metadata = {
    title: "Haqqımızda",
    description: "Haqqımızda",
    keywords: ["Haqqımızda"]
  };

function About() {
    return (
        <main>
            <Header />
            <OurMission />
            <BestService />
            <Doctors/>
            <FotoGallery/>
            <FAQ/>
            <ContactNow/>
        </main>
    );
}
export default About;