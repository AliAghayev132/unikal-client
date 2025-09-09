import React from 'react'
import Image from 'next/image'
import PageHeaders from '@/components/common/PageHeaders'

// Partner assets
import akh from '@/assets/partners/AKH.jpg'
import ass from '@/assets/partners/ass.png'
import ata from '@/assets/partners/ata_sigorta.jpg'
import ateshgah from '@/assets/partners/atesgah.jpg'
import pasa from '@/assets/partners/pasa_heyat.jpg'
import qala from '@/assets/partners/qala.jpg'
import xalq from '@/assets/partners/xalq.jpg'

const partners = [
  { name: 'Azərbaycan Könüllü Həkimlər Assosiasiyası', logo: akh },
  { name: 'Azərbaycan Sənaye Sığorta', logo: ass },
  { name: 'Ata Sığorta', logo: ata },
  { name: 'Atəşgah Sığorta', logo: ateshgah },
  { name: 'Paşa Həyat', logo: pasa },
  { name: 'Qala Sığorta', logo: qala },
  { name: 'Xalq Sığorta', logo: xalq },
]

function Corporate() {
  return (
    <main className="w-full">
      {/* Header */}
      <div className="wrapper">
        <PageHeaders
          title="Korporativ"
          subtitle1="Korporativ"
          subtitle2="əməkdaşlar"
          description="Səhiyyə sahəsində müxtəlif təşkilatlarla əməkdaşlıq edərək, pasiyentlərimizə daha geniş imkanlar təqdim edirik."
        />
      </div>

      {/* Partners grid */}
      <section className="wrapper pb-16 md:pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-full h-24 flex items-center justify-center">
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={240}
                  height={120}
                  className="object-contain max-h-24 w-auto"
                />
              </div>
              <div className="mt-4 text-sm font-medium text-slate-800 text-center">
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Corporate
