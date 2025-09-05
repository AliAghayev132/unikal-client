import React from 'react'

const ExtraServices = () => {
  return (
    <section className="wrapper pb-12 md:pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Əlavə xidmətlər</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700"><FlaskConical size={18} /></span>
              <div className="font-medium">Vitamin D və tiroid paneli</div>
            </div>
            <p className="text-sm text-slate-600">TSH, T3/T4 və Vitamin D səviyyələrinin qiymətləndirilməsi.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700"><Activity size={18} /></span>
              <div className="font-medium">EKQ Holter / Qlikoz Holter</div>
            </div>
            <p className="text-sm text-slate-600">Ritm və şəkər dəyişikliklərinin 24–48 saat monitorinqi.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-700"><HeartPulse size={18} /></span>
              <div className="font-medium">ECHO / Qarın boşluğu USM</div>
            </div>
            <p className="text-sm text-slate-600">Həkim göstərişi ilə ürək USM və qarın boşluğu USM.</p>
          </div>
        </div>
      </section>
  )
}

export default ExtraServices
