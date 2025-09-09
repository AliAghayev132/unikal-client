import Header from "./components/Header";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import FAQ from "./components/FAQ";
import Blogs from "./components/Blogs";
import { Contact } from "./components/Contact";

export const metadata = {
  title: "Unikal Klinika",
  description: "Ana Səhifə",
  keywords: ["Ana Səhifə"]
};

function Home() {



  return (
    <div className="font-sans w-full flex flex-col items-center overflow-hidden">
     <Header />
     <Services />
     <Partners />
     <Doctors />
     <Contact />
     <Blogs />
     <FAQ />
    </div>
  );
}

export default Home
