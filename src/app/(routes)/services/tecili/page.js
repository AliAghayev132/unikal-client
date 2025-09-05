import React from 'react'
import { TextAnimation } from '@/components/ui/Animations'
import Button from '@/components/ui/Button'
import { Ambulance, PhoneCall, Clock, HeartPulse, CheckCircle } from 'lucide-react'



function Tecili() {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div className="max-w-2xl">
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
            <div className="mt-6 flex flex-wrap gap-4">
              <Button isLink href="/contact" variant="default" text="Qəbula yazıl" />
              <a href="tel:*5005" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 shadow-sm hover:shadow-md transition">
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <PhoneCall size={18} />
                </span>
                <span className="font-semibold tracking-tight"><span className="text-primary">*</span>5005</span>
                <span className="ml-1 text-xs text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">7/24</span>
              </a>
            </div>
          </div>

          {/* Illustration card */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-8 md:p-10 shadow-sm">
              <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" aria-hidden />
              <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-rose-200/30 blur-3xl" aria-hidden />

              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-2xl bg-white text-sky-600 shadow-md">
                  <Ambulance size={34} />
                </div>
                <div>
                  <div className="text-slate-900 font-semibold text-lg">Təcili yardım</div>
                  <div className="text-sm text-slate-600">Peşəkar heyət, operativ cavab</div>
                </div>
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
          <aside className="h-max rounded-2xl border border-primary/20 bg-gradient-to-b from-[#f7fbff] to-white p-6 shadow-sm">
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
            <a href="tel:*5005" className="mt-5 inline-flex items-center justify-center rounded-full bg-primary text-white px-4 py-2 font-medium shadow hover:shadow-md transition">Zəng et</a>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Tecili
