import React from 'react'
import Button from '@/components/ui/Button'
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import InfoCards from './components/InfoCards';

export const metadata = {
    title: "Əlaqə",
    description: "Əlaqə",
    keywords: ["Əlaqə"]
  };

const ContactPage = () => {
  return (
    <main className="w-full">
      {/* Header */}
   <Header/>

      {/* Form Card */}
   <ContactForm/>

      {/* Info cards */}
   <InfoCards/>
    </main>
  )
}

export default ContactPage
