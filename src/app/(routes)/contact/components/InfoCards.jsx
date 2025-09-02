import { ContainerAnimation, GridAnimation, ItemAnimation } from '@/components/ui/Animations'
import React from 'react'

const InfoCards = () => {
  return (
    <section className="w-full mt-16 bg-[#0E0F23]">
    <div className="wrapper py-10 md:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {/* Card */}
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
        <ItemAnimation delay={0}>
          <h3 className="text-white text-lg font-semibold mb-2">İş saatları</h3>
          <p className="text-sm">Bazar ertəsi – Şənbə: 08:00 – 20:00</p>
          <p className="text-sm mt-2">Təcili Yardım: 7/24 xidmətinizdəyik!</p>
        </ItemAnimation>
        </div>
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
        <ItemAnimation delay={0.2}>
          <h3 className="text-white text-lg font-semibold mb-2">Bizimlə Əlaqə Saxlayın</h3>
          <p className="text-sm">Qəbul və Məlumat Üçün: +994 50 285 21 75, +994 50 285 21 85</p>
          <p className="text-sm mt-2">Stasionar Nömrə: (018) 642 46 55</p>
          <p className="text-sm mt-2">Təcili Yardım Xətti: *5005</p>
        </ItemAnimation>
        </div>
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
        <ItemAnimation delay={0.4}>
          <h3 className="text-white text-lg font-semibold mb-2">Ünvan</h3>
          <p className="text-sm">AZ5009, Sumqayıt şəhəri, Niyazi küçəsi, 121</p>
        </ItemAnimation>
        </div>
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
        <ItemAnimation delay={0.6}>
          <h3 className="text-white text-lg font-semibold mb-2">Email Ünvanı</h3>
          <p className="text-sm">info@unikalklinika.com</p>
          <p className="text-sm mt-2">unikalclinica@gmail.com</p>
        </ItemAnimation>
        </div>

      </div>
    </div>
  </section>
  )
}

export default InfoCards
