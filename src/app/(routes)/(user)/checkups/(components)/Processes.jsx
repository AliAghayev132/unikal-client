import React from 'react'

const Processes = () => {
  return (
    <section className="wrapper pb-16 md:pb-20">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Proses necə işləyir?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[{t:'Qeydiyyat',d:'Məlumatların toplanması və yönləndirmə'},{t:'İlkin müayinə',d:'Həkim tərəfindən klinik qiymətləndirmə'},{t:'Analizlər',d:'Laborator və instrumental müayinələr'},{t:'Nəticələr',d:'Nəticələrin izahı və tövsiyələr'}].map((s, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-9 w-9 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold">{i+1}</span>
              <div className="font-medium">{s.t}</div>
            </div>
            <p className="text-sm text-slate-600">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Processes
