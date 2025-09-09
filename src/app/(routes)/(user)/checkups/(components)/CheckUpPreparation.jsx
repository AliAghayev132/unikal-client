import React from 'react'

const CheckUpPreparation = () => {
  return (
    <section className="wrapper pb-12 md:pb-16">
    <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Check-up-a hazırlıq</h2>
      <p className="text-slate-600 mb-5">Daha doğru nəticələr üçün ziyarətdən əvvəl aşağıdakı tövsiyələrə əməl etməyiniz xahiş olunur:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="space-y-2 list-disc pl-5 text-sm text-slate-700">
          <li>Analizlərdən 8–10 saat əvvəl ac qalın (su içmək olar).</li>
          <li>Qəhvə, enerji içkiləri və alkoqoldan 24 saat əvvəl uzaq durun.</li>
          <li>Daimi dərmanlar barədə həkimlə öncədən məsləhətləşin.</li>
          <li>Rahat geyim və asan çıxarılan aksessuarlar seçin.</li>
        </ul>
        <ul className="space-y-2 list-disc pl-5 text-sm text-slate-700">
          <li>USM üçün sidik kisəsini boşaltmayın (həkim göstərişi ilə).</li>
          <li>Rentgen öncəsi metal aksessuarları çıxarın.</li>
          <li>Yuxu rejiminizi mümkün qədər normal saxlayın.</li>
          <li>Gəliş vaxtına 10–15 dəqiqə əvvəl klinikada olun.</li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default CheckUpPreparation
