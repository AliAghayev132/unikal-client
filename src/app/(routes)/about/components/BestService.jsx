import React from "react";
import Image from "next/image";
import { MapPin, Clock, Ambulance } from "lucide-react";
import headerImg from "@/assets/unikal_esas.jpg";
import icon1 from "@/assets/sections/icons/personalizedcare.jpg";
import icon2 from "@/assets/sections/icons/icon2.jpg";
import bestServiceImg from "@/assets/sections/bestservice.jpg";
import Button from "@/components/ui/Button";

const BestService = () => {
  return (
    <section className="wrapper sm:py-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Right Side (Image with Shape) */}
        <div className="relative max-w-[600px] lg:block hidden">
          <Image
            src={bestServiceImg}
            alt="Unikal Klinika"
            width={1000}
            height={1000}
            className="rounded-[2rem] object-cover"
          />
        </div>
        {/* Left Side (Text) */}

        <div>
          <p className="sm:text-xl text-lg font-semibold mb-3 pl-2">
            Seçkin xidmət
          </p>
          <h3 className="text-4xl md:text-5xl font-semibold leading-snug mb-6">
            Ailənizin sağlamlığı üçün fərdi qayğı göstəririk
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl">
            Unikal Klinika olaraq, hər bir ailənin sağlamlıq ehtiyaclarını fərdi
            yanaşma ilə qarşılamağa sadiqik. Müasir tibb texnologiyaları və
            təcrübəli həkimlərimizlə sizin rahatlığınızı və təhlükəsizliyinizi
            təmin edirik.
          </p>

          {/* Address & Time with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="flex flex-col sm:items-start items-center gap-3 px-2">
              <Image src={icon1} alt="icon1" width={100} height={100} />
              <h3>Fərdi Qayğı</h3>
              <p className="max-w-xs sm:text-start text-center">
                Təcrübəli komandamız sizin və yaxınlarınızın sağlamlığına xüsusi
                diqqət göstərir, hər müalicə planını fərdi ehtiyaclara uyğun
                hazırlayır.
              </p>
            </div>
            <div className="flex flex-col sm:items-start items-center gap-3 px-2">
              <Image src={icon2} alt="icon2" width={100} height={100} />
              <h3>Müasir Tibbi Avadanlıqlar</h3>
              <p className="max-w-xs sm:text-start text-center">
                Xəstəxanamız ən son texnologiya ilə təchiz olunub ki, dəqiq diaqnostika və effektiv müalicə təmin edilsin.
              </p>
            </div>
          </div>
        </div>
        <div className="relative max-w-[600px] lg:hidden block">
          <Image
            src={bestServiceImg}
            alt="Unikal Klinika"
            width={1000}
            height={1000}
            className="rounded-[2rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BestService;
