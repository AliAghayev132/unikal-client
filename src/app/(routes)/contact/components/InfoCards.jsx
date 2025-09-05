import { ItemAnimation } from '@/components/ui/Animations'
import { Clock, Phone, MapPin, Mail } from "lucide-react";
import React from 'react'

const InfoCards = () => {
  return (
    <section className="w-full mt-16 bg-gradient-to-b from-[#f7fbff] to-white">
      <div className="wrapper py-10 md:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-6">

          {/* İş saatları */}
          <ItemAnimation delay={0}>
            <div className="h-full flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Clock size={22} />
                </div>
                <h3 className="text-slate-900 text-lg font-semibold tracking-tight">
                  İş saatları
                </h3>
              </div>
              <p className="text-sm text-slate-600">Bazar ertəsi – Şənbə: <br /> <span className="font-medium text-slate-800">08:00 – 20:00</span></p>
              <p className="text-sm mt-3 text-slate-600">Təcili Yardım: <span className="font-medium text-red-500">7/24 xidmətinizdəyik!</span></p>
            </div>
          </ItemAnimation>

          {/* Əlaqə */}
          <ItemAnimation delay={0.2}>
            <div className="h-full flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Phone size={22} />
                </div>
                <h3 className="text-slate-900 text-lg font-semibold tracking-tight">
                  Bizimlə Əlaqə
                </h3>
              </div>
              <p className="text-sm text-slate-600">Qəbul və Məlumat: <br /> <span className="font-medium text-slate-800">+994 (050) 285 21 85</span></p>
              <p className="text-sm mt-3 text-slate-600">Təcili Yardım Xətti: <span className="font-medium text-red-500">*5005</span></p>
            </div>
          </ItemAnimation>

          {/* Ünvan */}
          <ItemAnimation delay={0.4}>
            <div className="h-full flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <MapPin size={22} />
                </div>
                <h3 className="text-slate-900 text-lg font-semibold tracking-tight">
                  Ünvan
                </h3>
              </div>
              <p className="text-sm text-slate-600">AZ5009, Sumqayıt şəhəri, <br /> Niyazi küçəsi, 121</p>
            </div>
          </ItemAnimation>

          {/* E-mail */}
          <ItemAnimation delay={0.6}>
            <div className="h-full flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <Mail size={22} />
                </div>
                <h3 className="text-slate-900 text-lg font-semibold tracking-tight">
                  E-mail Ünvanı
                </h3>
              </div>
              <p className="text-sm text-slate-600">unikalclinica@gmail.com</p>
            </div>
          </ItemAnimation>

        </div>
      </div>
    </section>
  )
}

export default InfoCards
