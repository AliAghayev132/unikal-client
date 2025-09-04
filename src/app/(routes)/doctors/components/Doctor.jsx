import { ItemAnimation } from '@/components/ui/Animations'
import Image from 'next/image'
import React from 'react'

const Doctor = ({doc,index,service}) => {
  return (
    <ItemAnimation key={doc.id} delay={index * 0.1}>
    <article className="rounded-2xl border border-neutral-200 p-3 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 rounded-xl overflow-hidden">
          <Image src={doc.image} alt={doc.name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-semibold">{doc.name}</h3>
          <p className="text-sm text-neutral-600">{doc.title}</p>
          {service && (
            <p className="text-xs text-neutral-500 mt-1">{service.title}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {typeof doc.experienceYears === 'number' && (
              <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-2.5 py-1 text-xs font-medium">
                {doc.experienceYears} il təcrübə
              </span>
            )}
            {doc.shift && (
              <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-1 text-xs font-medium">
                {doc.shift === 'morning' && 'Səhər'}
                {doc.shift === 'afternoon' && 'Günorta'}
                {doc.shift === 'evening' && 'Axşam'}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
    </ItemAnimation>
  )
}

export default Doctor
