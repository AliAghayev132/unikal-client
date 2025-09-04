import React from 'react'
import Button from '@/components/ui/Button'
import { MapPin } from 'lucide-react'

const Vacancy = ( {job, idx} ) => {
  return (
    <div
    key={idx}
    className="rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
    <div className="flex items-center gap-2 text-neutral-600 mb-1">
      <MapPin className="w-4 h-4 text-primary" />
      <span className="text-sm">{job.location}</span>
    </div>
    <p className="text-sm text-neutral-500 mb-5">{job.type}</p>
    <div className="flex gap-3">
      <Button isLink href={job.href} variant="default" text="Müraciət et" />
      <Button isLink href="/contact" variant="outline" text="Əlaqə" />
    </div>
  </div>
  )
}

export default Vacancy
