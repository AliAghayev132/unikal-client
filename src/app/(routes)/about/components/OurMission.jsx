import React from 'react'
import Image from 'next/image'
import { MapPin, Clock, Ambulance } from 'lucide-react'
import headerImg from '@/assets/unikal_esas.jpg'
import ourMissionImg from '@/assets/sections/ourmission.jpg'
import Button from '@/components/ui/Button'

const OurMission = () => {
  return (
    <section className="wrapper sm:py-12 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side (Text) */}
      <div>
        <h3 className="text-4xl md:text-5xl font-semibold leading-snug mb-6">
        Tariximiz, Missiyamız, Baxışımız və Dəyərlərimiz
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl">
        Unikal Klinika olaraq fəaliyyətimizin əsasında etibarlı tibbi xidmət, pasiyent məmnuniyyəti və davamlı inkişaf dayanır. Biz sağlamlığınızı qorumağı müqəddəs bir məsuliyyət hesab edirik və bu dəyərlərlə yolumuza davam edirik.
        </p>

        {/* Address & Time with Icons */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 text-gray-700">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>Niyazi küçəsi, 121, Sumqayıt şəhəri, AZ5009</span>
          </div>
          <div className="flex items-start gap-3 text-gray-700">
            <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>Bazar ertəsi – Şənbə: 09:00 – 19:00</span>
          </div>
          <div className="flex items-start gap-3 text-gray-700">
            <Ambulance className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <span>Təcili Yardım: 7/24 xidmətinizdəyik!</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button text="Ətraflı Bax" variant="default" />
          {/* <Button text="Qəbula Yazılın" variant="outline" /> */}
        </div>
      </div>

      {/* Right Side (Image with Shape) */}
      <div className="relative max-w-[600px]">
        <Image
          src={ourMissionImg}
          alt="Unikal Klinika"
          width={1000}
          height={1000}
          className="rounded-[2rem] object-cover"
        />
      </div>
    </div>
  </section>
  )
}

export default OurMission
