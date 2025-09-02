'use client'
import React from 'react'
import Button from '@/components/ui/Button'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm
