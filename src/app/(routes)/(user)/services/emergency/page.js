import React from 'react'
import Image from 'next/image'
import { TextAnimation } from '@/components/ui/Animations'
import Button from '@/components/ui/Button'
import { Ambulance, PhoneCall, Clock, HeartPulse, CheckCircle } from 'lucide-react'
import emergency from '@/assets/sections/emergency.jpg'


function Emergency() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-y-0 gap-y-8 lg:gap-10 items-center">
          <div className=" col-span-3">
            <TextAnimation>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                24/7 Təcili tibbi yardım və ambulans xidməti
              </h1>
            </TextAnimation>
            <p className="text-neutral-600 md:text-lg">
              Unikal klinika 24/7 ambulans xidməti ilə hər an yanınızdadır! Peşəkar və təcrübəli tibbi heyətimiz
              tam təchizatlı ambulans vasitəsi ilə çağırış yerinə dərhal çatır, ilkin tibbi yardımı göstərir və
              təhlükəsiz nəqliyyat təmin edir.
            </p>
            <div className="mt-6 flex items-center sm:justify-start justify-center gap-4">
              <Button isLink href="/contact" variant="default" text="Qəbula yazıl" />
              <a href="tel:*5005" className="group relative">
            <div className="flex items-center gap-3 rounded-full   bg-gradient-to-r from-[#ece9ff] to-[#eef4ff] px-6 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <div
                  aria-hidden
                  className="flex items-center justify-center"
                >
                  <PhoneCall size={22} />
                </div>
               
              </div>
              <div className="leading-tight">
                <div className="text-[11px] text-slate-500 group-hover:text-slate-600">Təcili Xətt</div>
                <div className="text-xl font-semibold text-slate-900 tracking-tight"><span className="text-primary">*</span>5005</div>
              </div>
              {/* <span aria-hidden className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500 animate-pulse" /> */}
            </div>
          </a>
            </div>
          </div>

          {/* Illustration card */}
          <div className="relative col-span-2 mx-auto">
            <div className="relative overflow-hidden ">

              {/* Emergency image */}
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={emergency}
                  alt="Unikal Klinika təcili yardım"
                  width={1920}
                  height={1080}
                  priority
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur p-3 border border-slate-200">
                  <Clock size={18} className="text-slate-700" />
                  <span className="text-sm text-slate-700">7/24 hazır</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur p-3 border border-slate-200">
                  <HeartPulse size={18} className="text-rose-600" />
                  <span className="text-sm text-slate-700">İlkin tibbi yardım</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white/80 backdrop-blur p-3 border border-slate-200">
                  <PhoneCall size={18} className="text-primary" />
                  <span className="text-sm text-slate-700">Çağırışa operativ cavab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="wrapper pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-neutral-700">
              Təcili tibbi yardıma ehtiyacınız yarandığı an peşəkar və təcrübəli tibbi heyətimiz tam təchizatlı ambulans vasitəsi ilə
              dərhal göstərilən ünvana gəlir. Hər bir çağırışa xüsusi diqqət yetirərək, xəstənin vəziyyətini stabilləşdirmək və ən qısa zamanda
              klinikaya təhlükəsiz şəkildə çatdırmaq üçün bütün lazımi addımları atırıq.
            </p>

            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Xidmətimizə daxildir:</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1 text-primary min-w-4" />
                  <p className="text-neutral-700"><span className="font-medium">Təcili Tibbi Müdaxilə:</span> Peşəkar həkimlər və feldşerlər hadisə yerində ilkin tibbi yardımı göstərir.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1 text-primary min-w-4" />
                  <p className="text-neutral-700"><span className="font-medium">Nəqliyyat:</span> Xəstənin vəziyyətinə uyğun təhlükəsiz nəqliyyat təmin edilir.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-1 text-primary min-w-4" />
                  <p className="text-neutral-700"><span className="font-medium">Monitorinq:</span> Nəqliyyat zamanı xəstənin vəziyyəti fasiləsiz olaraq nəzarətdə saxlanılır.</p>
                </li>
              </ul>
            </div>

            <p className="text-neutral-700">Unikal klinikanın 24/7 ambulans xidmətinə zəng etmək üçün: <span className="font-semibold">*5005</span></p>
            <p className="text-neutral-700">Sağlamlığınız üçün gecə-gündüz fəaliyyət göstəririk!</p>
          </div>

          {/* Callout */}
          <aside className="h-max rounded-2xl border border-[#0a3af8]/20 bg-gradient-to-b from-[#f7fbff] to-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                <PhoneCall size={20} />
              </div>
              <div>
                <div className="text-sm text-slate-600">Təcili Xətt</div>
                <div className="text-2xl font-bold tracking-tight"><span className="text-primary">*</span>5005</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 mt-4">Çağırışlara operativ cavab. 7/24 xidmətinizdəyik.</p>
            {/* <a href="tel:*5005" className="mt-5 inline-flex items-center justify-center rounded-full bg-primary text-white px-4 py-2 font-medium shadow hover:shadow-md transition">Zəng et</a> */}
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Emergency
