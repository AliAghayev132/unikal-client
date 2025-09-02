import Button from "@/components/ui/Button";
import React from "react";

const Header = () => {
  return (
    <section className="w-full py-10 md:py-14 lg:py-16">
      <div className="wrapper">
        {/* Top content: left title block, right description + CTA */}
        <h1 className="font-bold leading-tight text-xl md:text-2xl lg:text-3xl">
          Haqqımızda
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start mt-10">
          {/* Right side */}
          <h2 className="max-w-xl leading-tight mt-5 sm:text-4xl md:text-5xl text-3xl font-semibold text-gray-800">
            Sağlamlığınız üçün <span className="text-primary">UNİKAL</span>{" "}
            yanaşma!
          </h2>
          <div className="max-w-xl flex flex-col">
            <h3 className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 sm:mt-10">
              Unikal Klinika — müasir tibbin, insan qayğısının və etibarlı
              xidmətin kəsişdiyi ünvandır. Biz burada təkcə xəstəlikləri müalicə
              etmirik — sizi dinləyir, anlayır və sağlam gələcəyinizə yol
              yoldaşı oluruq.
            </h3>
            <Button text="Qəbula Yazılın" variant="default" />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
          {/* Stat 1 */}
          <div className="flex flex-col sm:items-start items-center gap-2 sm:pl-6 sm:border-l-2 border-primary">
            <div className="text-3xl md:text-4xl font-semibold">
              400<span className="text-primary">K+</span>
            </div>
            <div className="text-sm text-neutral-600">Məmnun müştəri</div>
          </div>
          <div className="sm:hidden border-b flex mx-auto w-[120px] border-primary"></div>
          {/* Stat 2 */}
          <div className="flex flex-col sm:items-start items-center gap-2 sm:pl-6 sm:border-l-2 border-primary">
            <div className="text-3xl md:text-4xl font-semibold">
              150<span className="text-primary">+</span>
            </div>
            <div className="text-sm text-neutral-600">Peşəkar əməkdaş</div>
          </div>
          <div className="sm:hidden border-b flex mx-auto w-[120px] border-primary"></div>

          {/* Stat 3 */}
          <div className="flex flex-col sm:items-start items-center gap-2 sm:pl-6 sm:border-l-2 border-primary">
            <div className="text-3xl md:text-4xl font-semibold">
              120<span className="text-primary">+</span>
            </div>
            <div className="text-sm text-neutral-600">
              İxtisaslaşmış şöbə və xidmət sahəsi
            </div>
          </div>
          <div className="sm:hidden border-b flex mx-auto w-[120px] border-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
