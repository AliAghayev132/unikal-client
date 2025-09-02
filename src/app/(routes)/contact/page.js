"use client"
import React from 'react'
import Button from '@/components/ui/Button'

export const metadata = {
    title: "Əlaqə",
    description: "Əlaqə",
    keywords: ["Əlaqə"]
  };

const ContactPage = () => {
  return (
    <main className="w-full">
      {/* Header */}
      <section className="wrapper py-10 md:py-14 lg:py-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="block text-xs md:text-sm font-semibold tracking-wider text-neutral-500 uppercase mb-2">Qəbul</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-primary">Qəbul</span> üçün yazılın
          </h1>
          <p className="text-neutral-600 md:text-lg">
            Həkim qəbuluna yazılaraq sağlamlığınızı vaxtında nəzarətdə saxlayın. Peşəkar komandamızla dəqiq diaqnoz və effektiv müalicə üçün ilk addımı indi atın.
          </p>
        </div>
      </section>

      {/* Form Card */}
      <section className="wrapper -mt-4">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-100 p-5 sm:p-7 md:p-8">
          <form onSubmit={(e)=>e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Name */}
            <div className="col-span-1">
              <label className="block text-sm text-slate-600 mb-2">Ad</label>
              <input type="text" placeholder="El Şabanov" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
            </div>
            {/* Email */}
            <div className="col-span-1">
              <label className="block text-sm text-slate-600 mb-2">Email</label>
              <input type="email" placeholder="nümunə@gmail.com" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
            </div>
            {/* Phone */}
            <div className="col-span-1">
              <label className="block text-sm text-slate-600 mb-2">Əlaqə Nömrəsi</label>
              <input type="tel" placeholder="(012) 345 67 89" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
            </div>
            {/* Schedule */}
            <div className="col-span-1">
              <label className="block text-sm text-slate-600 mb-2">Görüş Qrafiki</label>
              <input type="text" placeholder="11:00 am - 13:00 pm" className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
            </div>
            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm text-slate-600 mb-2">Mesaj</label>
              <textarea rows={5} placeholder="Sualınızı və ya müraciətinizi buraya yazın..." className="w-full rounded-xl border border-slate-200 focus:border-primary/60 focus:ring-primary/20 ring-2 ring-transparent px-4 py-3 outline-none transition placeholder:text-slate-400" />
            </div>

            <div className="col-span-1 md:col-span-2 flex justify-center pt-2">
              <Button text="Müraciətini Göndər" variant="default" />
            </div>
          </form>
        </div>
      </section>

      {/* Info cards */}
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
    </main>
  )
}

export default ContactPage
