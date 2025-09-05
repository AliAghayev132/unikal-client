"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import logo from '@/assets/ag_unikal.svg'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  const socialVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 10 }
    },
    hover: { scale: 1.2, rotate: 5 }
  }

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#02378b] text-white py-12 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Logo and description section */}
          <motion.div style={{ willChange: " transform" }} variants={itemVariants} className="flex  flex-col gap-y-6 sm:items-start items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
               className='w-[200px]'
            >
              <Image 
                src={logo} 
                alt="Unikal Klinika" 
                width={180} 
                height={60} 
                className="object-contain w-full h-full"
              />
            </motion.div>
            <p className="text-white text-sm max-w-xs sm:text-start text-center">
              Yenilənmiş xəstəxanamızda müasir tibbi avadanlıqlar, təcrübəli həkim heyəti və pasiyent mərkəzli yanaşma ilə xidmətinizdəyik.
            </p>
            <motion.div 
              variants={itemVariants}
              className="flex space-x-4 pt-2"
              style={{ willChange: "opacity, transform" }}
            >
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/UnikalKlinika" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/unikal_klinika_sumqayit" },
                { icon: <FaTiktok />, href: "https://tiktok.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover="hover"
                  className="bg-[#fff] p-2 rounded-full text-primary flex items-center justify-center w-8 h-8"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hospital links */}
          <motion.div variants={itemVariants} style={{ willChange: "opacity, transform" }} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2 inline-block">
              Hospitalımız
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Haqqımızda", href: "/about",id:1 },
                // { name: "Şöbələr", href: "/services" },
                { name: "Həkimlərimiz", href: "/doctors",id:2 },
                { name: "Check-up Paketləri", href: "/checkups",id:3 },
                { name: "Karyera", href: "/careers",id:4 }
              ].map((link) => (
                <motion.li 
                  key={link.id}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link href={link.href} className="text-white hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources links */}
          <motion.div variants={itemVariants} style={{ willChange: "opacity, transform" }} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2 inline-block">
              Xidmətlər
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Xidmətlər", href: "/services",id:1 },

                { name: "Xəbərlər", href: "/blogs",id:2 },
                // { name: "Tez-tez verilən suallar", href: "/faq" },
                { name: "Qəbula Yazıl", href: "/contact",id:3 },
              ].map((link) => (
                <motion.li 
                  key={link.id}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link href={link.href} className="text-white hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact information */}
          <motion.div variants={itemVariants} style={{ willChange: "opacity, transform" }} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 border-b border-primary pb-2 inline-block">
              Əlaqə
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white">Niyazi küçəsi, 121, Sumqayıt şəhəri, AZ5009</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white">*5005 (Təcili Yardım)</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white">unicalclinica@gmail.com</span>
              </li>
              
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-primary my-8"
        />

        {/* Copyright section */}
        <motion.div 
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-white"
          style={{ willChange: "opacity, transform" }}
        >
          <motion.p variants={itemVariants}>
            © {new Date().getFullYear()} Unikal Klinika tərəfindən bütün hüquqlar qorunur.
          </motion.p>
          <motion.div variants={itemVariants} className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-blue-400 transition-colors">Site by Core Studio</Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer