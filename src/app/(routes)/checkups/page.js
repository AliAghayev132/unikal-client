"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import PageHeaders from '@/components/common/PageHeaders'
import Button from '@/components/ui/Button'
import FAQ from "../(home)/components/FAQ";
import { CheckCircle, Stethoscope, HeartPulse, Shield, Clock, FlaskConical, Activity } from 'lucide-react'
import Processes from './(components)/Processes'
import ContactNow from '../about/components/ContactNow'
import ExtraServices from './(components)/ExtraServices'
import CheckUpPreparation from './(components)/CheckUpPreparation'

const packages = [
  {
    id: 1,
    name: 'Basic Check-up',
    tagline: 'Əsas sağlamlıq göstəriciləri',
    price: '89 ₼',
    accent: 'from-sky-50 to-white',
    features: [
      'Terapevt qəbul və konsultasiya',
      'Qan sayımı (Ümumi analiz)',
      'Qan şəkəri (qlükoza)',
      'Lipid profili (xolesterin, TG)',
      'EKQ (istirahət)',
    ],
    icon: Stethoscope,
  },
  {
    id: 2,
    name: 'Standard Check-up',
    tagline: 'Genişləndirilmiş profilaktik paket',
    price: '149 ₼',
    accent: 'from-indigo-50 to-white',
    featured: true,
    features: [
      'Terapevt qəbul + konsultasiya',
      'Qan sayımı və biokimya paneli',
      'Qalxanabənzər vəz hormonları (TSH)',
      'Vitamin D səviyyəsi',
      'Qarın boşluğu USM',
      'EKQ və ECHO (ürək USM)',
    ],
    icon: HeartPulse,
  },
  {
    id: 3,
    name: 'Premium Check-up',
    tagline: 'Daha dərin və əhatəli müayinə',
    price: '249 ₼',
    accent: 'from-emerald-50 to-white',
    features: [
      'Terapevt və dar ixtisaslı həkim konsultasiyası',
      'Geniş biokimya və hormonal panel',
      'Döş qəfəsi rentgen (və ya həkim göstərişi ilə alternativ)',
      'Qarın və tiroid USM',
      'EKQ, ECHO və EKG Holter (lazım olduqda)',
    ],
    icon: Shield,
  },
]

export default function CheckupsPage() {
  const [segment, setSegment] = useState('butun');

  const segmentPackages = {
    butun: packages,
    kisi: [
      {
        id: 'm1',
        name: 'Kişi Basic',
        tagline: 'Əsas skrininqlər (kişi)',
        price: '99 ₼',
        accent: 'from-sky-50 to-white',
        features: [
          'Terapevt konsultasiyası',
          'Ümumi analiz + biokimya (əsas)',
          'Lipid profili, qlükoza',
          'EKQ (istirahət)',
          'PSA (prostat spesifik antigen)',
        ],
        icon: Stethoscope,
      },
      {
        id: 'm2',
        name: 'Kişi Standard',
        tagline: 'Genişləndirilmiş skrininq',
        price: '169 ₼',
        accent: 'from-indigo-50 to-white',
        featured: true,
        features: [
          'Terapevt qəbul + konsultasiya',
          'Geniş biokimya paneli',
          'PSA + Tiroid (TSH)',
          'Qarın boşluğu USM',
          'EKQ və ECHO',
        ],
        icon: HeartPulse,
      },
      {
        id: 'm3',
        name: 'Kişi Premium',
        tagline: 'Dərin skrininq və monitorinq',
        price: '279 ₼',
        accent: 'from-emerald-50 to-white',
        features: [
          'Dar ixtisas konsultasiyası',
          'Geniş biokimya + hormonal panel',
          'ECHO + EKQ Holter',
          'Qarın və tiroid USM',
        ],
        icon: Shield,
      },
    ],
    qadin: [
      {
        id: 'w1',
        name: 'Qadın Basic',
        tagline: 'Əsas skrininqlər (qadın)',
        price: '109 ₼',
        accent: 'from-rose-50 to-white',
        features: [
          'Terapevt konsultasiyası',
          'Ümumi analiz + biokimya (əsas)',
          'Lipid profili, qlükoza',
          'Tiroid TSH',
          'Ginekoloji yönləndirmə (lazım olarsa)',
        ],
        icon: Stethoscope,
      },
      {
        id: 'w2',
        name: 'Qadın Standard',
        tagline: 'Genişləndirilmiş skrininq',
        price: '179 ₼',
        accent: 'from-pink-50 to-white',
        featured: true,
        features: [
          'Terapevt + ginekoloji konsultasiya',
          'Geniş biokimya + Tiroid paneli (TSH, T3/T4)',
          'Vitamin D səviyyəsi',
          'Döş və tiroid USM',
        ],
        icon: HeartPulse,
      },
      {
        id: 'w3',
        name: 'Qadın Premium',
        tagline: 'Əhatəli skrininq',
        price: '299 ₼',
        accent: 'from-fuchsia-50 to-white',
        features: [
          'Dar ixtisas konsultasiyası',
          'Geniş hormonal panel',
          'Qarın, tiroid və ginekoloji USM',
          'ECHO + EKQ (lazım olarsa)',
        ],
        icon: Shield,
      },
    ],
    usaq: [
      {
        id: 'c1',
        name: 'Uşaq Basic',
        tagline: 'Pediatrik əsas skrininq',
        price: '79 ₼',
        accent: 'from-amber-50 to-white',
        features: [
          'Pediatr konsultasiyası',
          'Ümumi qan analizləri',
          'Dəmir göstəriciləri (ferritin)',
          'Vitamin D səviyyəsi',
        ],
        icon: Stethoscope,
      },
      {
        id: 'c2',
        name: 'Uşaq Standard',
        tagline: 'İnkişaf fokuslu skrininq',
        price: '119 ₼',
        accent: 'from-lime-50 to-white',
        featured: true,
        features: [
          'Pediatr + qidalanma məsləhəti',
          'Geniş qan paneli',
          'Sidik analizi',
          'USM (lazım olduqda)',
        ],
        icon: HeartPulse,
      },
      {
        id: 'c3',
        name: 'Uşaq Premium',
        tagline: 'Geniş pediatrik skrininq',
        price: '179 ₼',
        accent: 'from-teal-50 to-white',
        features: [
          'Dar ixtisas konsultasiyası',
          'Geniş laborator panel',
          'USM-lər (göstərişlə)',
          'EKQ (lazım olduqda)',
        ],
        icon: Shield,
      },
    ],
  };

  const visiblePackages = segmentPackages[segment] || packages;
  return (
    <main className="w-full">
      {/* Header */}
      <div className="wrapper">
        <PageHeaders
          title="Check-up"
          subtitle1="Check-up "
          subtitle2="paketləri"
          description="Sağlamlığınızı vaxtında yoxlayın. Sizin üçün müxtəlif ehtiyaclardakı profilaktik check-up paketlərini hazırladıq."
        />
      </div>

      {/* Segments Tabs */}
      <section className="wrapper -mt-4 pb-6">
        <div className="inline-flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          {[
            { key: 'butun', label: 'Bütün' },
            { key: 'kisi', label: 'Kişi' },
            { key: 'qadin', label: 'Qadın' },
            { key: 'usaq', label: 'Uşaq' },
          ].map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setSegment(t.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                segment === t.key ? 'bg-primary text-white shadow' : 'text-slate-700 hover:bg-slate-50'
              }`}
              aria-pressed={segment === t.key}
            >
              {t.label}
            </button>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="wrapper pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {visiblePackages.map((p) => (
            <div
              key={p.id}
              className={`relative rounded-2xl border ${
                p.featured ? 'border-primary' : 'border-slate-200'
              } bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all overflow-hidden`}
            >
              {/* Accent background */}
              <div className={`absolute inset-x-0 -top-24 h-40 bg-gradient-to-b ${p.accent} opacity-80 blur-2xl pointer-events-none`} />

              <div className="relative p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{p.tagline}</p>
                  </div>
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                    p.featured ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {React.createElement(p.icon, { size: 20 })}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-2xl font-bold tracking-tight">
                    {p.price}
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className={`mt-1 ${p.featured ? 'text-primary' : 'text-emerald-600'}`} />
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button isLink href="/contact" variant={p.featured ? 'default' : 'outline'} text="Qəbula yazıl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Preparation instructions */}
    <CheckUpPreparation/>

      {/* Add-on services */}
    <ExtraServices/>

      {/* Process steps */}
     <Processes />

      {/* FAQ reuse */}
      <FAQ />

      <ContactNow/>
    </main>
  )
}
