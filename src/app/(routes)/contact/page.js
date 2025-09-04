import React from "react";
import Button from "@/components/ui/Button";
import ContactForm from "./components/ContactForm";
import InfoCards from "./components/InfoCards";
import PageHeaders from "@/components/common/PageHeaders";

export const metadata = {
  title: "Əlaqə",
  description: "Əlaqə",
  keywords: ["Əlaqə"],
};

const ContactPage = () => {
  return (
    <main className="w-full ">
      {/* Header */}
      <header className="wrapper">
      <PageHeaders
        title="Qəbul"
        subtitle1="Qəbul"
        subtitle2="üçün yazılın"
        description="Həkim qəbuluna yazılaraq sağlamlığınızı vaxtında nəzarətdə saxlayın. Peşəkar komandamızla dəqiq diaqnoz və effektiv müalicə üçün ilk addımı indi atın."
        />
        </header>

      {/* Form Card */}
      <ContactForm />

      {/* Info cards */}
      <InfoCards />
    </main>
  );
};

export default ContactPage;
