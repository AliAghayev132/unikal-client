import ServicesGrid from "./components/ServicesGrid";
import ContactNow from "../about/components/ContactNow";
import FAQ from "../(home)/components/FAQ";
import { TextAnimation } from "@/components/ui/Animations";
import { services } from "@/data/services";

export const metadata = {
  title: "Xidmətlər",
  description: "Xidmətlər",
  keywords: ["Xidmətlər"],
};

function Services() {
  return (
    <main className="w-full">
      {/* Header */}
      <header className="wrapper py-10 md:py-14 lg:py-16">
        <TextAnimation>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Ailəniz üçün hərtərəfli tibbi xidmətlər
          </h1>
        </TextAnimation>
      </header>

      {/* Services grid */}
      <section className="wrapper pb-16 md:pb-20">
        <ServicesGrid services={services} />
      </section>
      <ContactNow />
      <FAQ />
    </main>
  );
}

export default Services;
