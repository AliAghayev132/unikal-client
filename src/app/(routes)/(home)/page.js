import Header from "./components/Header";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Blogs from "./components/Blogs";

export const metadata = {
  title: "Unikal Klinika",
  description: "Ana Səhifə",
  keywords: ["Ana Səhifə"]
};

function Home() {



  return (
    <div className="font-sans w-full flex flex-col items-center">
     <Header />
     {/* <Partners /> */}
     <Services />
     <Doctors />
     <Blogs />
     <Contact />
     <FAQ />
    </div>
  );
}

export default Home
