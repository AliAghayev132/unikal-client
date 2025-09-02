import React from 'react'

const Header = () => {
  return (
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
  )
}

export default Header
