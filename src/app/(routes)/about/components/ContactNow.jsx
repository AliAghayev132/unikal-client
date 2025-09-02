import Button from "@/components/ui/Button";
import React from "react";

const ContactNow = () => {
  return (
    <section className="wrapper py-12 md:py-16">
      <div className="max-w-6xl mx-auto bg-primary rounded-2xl flex gap-4 flex-col items-center justify-center text-white p-8 md:p-12">
        <h3 className="text-3xl md:text-4xl font-semibold">Bu gün tibbi qəbulunuza yazılın</h3>
        <p className=" md:text-lg text-center">
          Sağlamlığınızı təxirə salmayın — əyani və ya onlayn şəkildə həkim
          qəbuluna yazılaraq zamanında yardım alın. Təcrübəli mütəxəssislərimiz
          sizin xidmətinizdədir.
        </p>
        <Button text="Qəbula Yazılın" variant="outline" isLink href="/contact" />
      </div>
    </section>
  );
};

export default ContactNow;
