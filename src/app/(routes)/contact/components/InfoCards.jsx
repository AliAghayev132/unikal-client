import { ItemAnimation } from '@/components/ui/Animations'
import React from 'react'

const InfoCards = () => {
  return (
    <section className="w-full mt-16 bg-gradient-to-b from-[#f7fbff] to-white">
    <div className="wrapper py-10 md:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {/* Card */}
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <ItemAnimation delay={0}>
          <h3 className="text-primary text-[18px] font-semibold mb-2 tracking-tight">İş saatları</h3>
          <div className="h-px w-10 bg-primary/40 mb-3" />
          <p className="text-sm text-slate-700">Bazar ertəsi – Şənbə: 08:00 – 20:00</p>
          <p className="text-sm mt-2 text-slate-700">Təcili Yardım: 7/24 xidmətinizdəyik!</p>
        </ItemAnimation>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <ItemAnimation delay={0.2}>
          <h3 className="text-primary text-[18px] font-semibold mb-2 tracking-tight">Bizimlə Əlaqə Saxlayın</h3>
          <div className="h-px w-10 bg-primary/40 mb-3" />
          <p className="text-sm text-slate-700">Qəbul və Məlumat Üçün: +994 (050) 285 21 85 , +994 (018) 656 52 52</p>
          <p className="text-sm mt-2 text-slate-700">Təcili Yardım Xətti: *5005</p>
        </ItemAnimation>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <ItemAnimation delay={0.4}>
          <h3 className="text-primary text-[18px] font-semibold mb-2 tracking-tight">Ünvan</h3>
          <div className="h-px w-10 bg-primary/40 mb-3" />
          <p className="text-sm text-slate-700">AZ5009, Sumqayıt şəhəri, Niyazi küçəsi, 121</p>
        </ItemAnimation>
        </div>
        <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <ItemAnimation delay={0.6}>
          <h3 className="text-primary text-[18px] font-semibold mb-2 tracking-tight">E-mail Ünvanı</h3>
          <div className="h-px w-10 bg-primary/40 mb-3" />
          <p className="text-sm  text-slate-700">unikalclinica@gmail.com</p>
        </ItemAnimation>
        </div>

      </div>
    </div>
  </section>
  )
}

export default InfoCards
