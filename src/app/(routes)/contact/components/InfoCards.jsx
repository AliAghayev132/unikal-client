import React from 'react'

const InfoCards = () => {
  return (
    <section className="w-full mt-16 bg-[#0E0F23]">
    <div className="wrapper py-10 md:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {/* Card */}
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
          <div className="text-white text-lg font-semibold mb-2">İş saatları</div>
          <p className="text-sm">Bazar ertəsi – Şənbə: 08:00 – 20:00</p>
          <p className="text-sm mt-2">Təcili Yardım: 7/24 xidmətinizdəyik!</p>
        </div>
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
          <div className="text-white text-lg font-semibold mb-2">Bizimlə Əlaqə Saxlayın</div>
          <p className="text-sm">Qəbul və Məlumat Üçün: +994 50 285 21 75, +994 50 285 21 85</p>
          <p className="text-sm mt-2">Stasionar Nömrə: (018) 642 46 55</p>
          <p className="text-sm mt-2">Təcili Yardım Xətti: *5005</p>
        </div>
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
          <div className="text-white text-lg font-semibold mb-2">Ünvan</div>
          <p className="text-sm">AZ5009, Sumqayıt şəhəri, Niyazi küçəsi, 121</p>
        </div>
        <div className="rounded-2xl border border-white/20 p-6 text-white/90 bg-white/5">
          <div className="text-white text-lg font-semibold mb-2">Email Ünvanı</div>
          <p className="text-sm">info@unikalklinika.com</p>
          <p className="text-sm mt-2">unikalclinica@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoCards
