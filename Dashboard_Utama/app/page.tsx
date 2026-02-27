'use client';

import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SatelliteMap from '@/components/SatelliteMapWrapper'
import { MapPin, Phone, Mail, Building2, Factory, Leaf, Users, Award, TreePine, Heart, Globe, Shield, ExternalLink, Play, ArrowRight, X } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    { src: '/assets/CSR_1.webp', alt: 'Distribusi Sembako' },
    { src: '/assets/CSR_2.webp', alt: 'Bantuan ke Desa' },
    { src: '/assets/CSR_3.webp', alt: 'Kegiatan Sosial' },
    { src: '/assets/CSR_4.webp', alt: 'Pemberdayaan Masyarakat' },
    { src: '/assets/CSR_5.webp', alt: 'Bersama Warga' },
  ]

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }
    }
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      {/* Kilasan Perusahaan Section */}
      <section id="kilasan" className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2 variants={childVariants} className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              {t.glance.title}
            </motion.h2>
            <motion.div variants={childVariants} className="h-1 w-24 bg-palm-green mx-auto rounded-full mb-8" />
            <motion.p variants={childVariants} className="text-xl text-gray-600 leading-relaxed italic">
              {t.glance.quote}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Tentang Kami Section */}
      <section id="about" className="py-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.about.title}</h2>
            <div className="mt-4 h-1 w-24 bg-palm-green mx-auto rounded-full" />
          </div>

          {/* Profil Perusahaan */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={childVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                <Building2 className="h-8 w-8 text-palm-green" />
                {t.about.profileTitle}
              </h3>
              <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                <p>{t.about.profileP1}</p>
                <p>{t.about.profileP2}</p>
              </div>
            </motion.div>

            <motion.div variants={childVariants} className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: "url('/assets/kebun sawit.webp')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-palm-green/80 to-earth-brown/80" />
              </div>
              <div className="relative h-full flex items-center justify-center text-center text-white p-8">
                <div>
                  <TreePine className="h-16 w-16 mx-auto mb-4 opacity-90 transition-transform duration-300 group-hover:-translate-y-2" />
                  <p className="text-lg font-semibold">{t.about.plantationTitle}</p>
                  <p className="text-sm opacity-80">{t.about.plantationLoc}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visi & Misi */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <motion.div variants={childVariants} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-palm-green hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Award className="h-7 w-7 text-golden-yellow" />
                {t.about.visionTitle}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t.about.visionDesc}
              </p>
            </motion.div>

            {/* Misi */}
            <motion.div variants={childVariants} className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-golden-yellow hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Leaf className="h-7 w-7 text-palm-green" />
                {t.about.missionTitle}
              </h3>
              <ul className="text-gray-600 leading-relaxed space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-palm-green font-bold">1.</span>
                  {t.about.mission1}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-palm-green font-bold">2.</span>
                  {t.about.mission2}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-palm-green font-bold">3.</span>
                  {t.about.mission3}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-palm-green font-bold">4.</span>
                  {t.about.mission4}
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Operasional Section */}
      <section id="operations" className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.operations.title}</h2>
            <div className="mt-4 h-1 w-24 bg-palm-green mx-auto rounded-full" />
          </div>

          {/* Estates Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Parit Gunung Estate */}
            <motion.div variants={childVariants} className="bg-gradient-to-br from-palm-green to-emerald-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Parit Gunung Estate</h3>
              <p className="text-white/80 text-sm mb-4">{t.operations.districtBadau}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">1A</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">1B</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">2A</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">2B</span>
              </div>
            </motion.div>

            {/* Air Ruak Estate */}
            <motion.div variants={childVariants} className="bg-gradient-to-br from-earth-brown to-amber-800 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <TreePine className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Air Ruak Estate</h3>
              <p className="text-white/80 text-sm mb-4">{t.operations.districtTimur}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">ARE A</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">ARE B1</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">ARE B2</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">ARE C</span>
              </div>
            </motion.div>

            {/* Darul Makmur Estate */}
            <motion.div variants={childVariants} className="bg-gradient-to-br from-teal-600 to-teal-800 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Globe className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">Darul Makmur Estate</h3>
              <p className="text-white/80 text-sm mb-4">{t.operations.districtBelitung}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Air Raya</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Kandis</span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-xs">Cendong</span>
              </div>
            </motion.div>
          </div>

          {/* Satellite Map */}
          <motion.div variants={childVariants} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="h-7 w-7 text-palm-green" />
              {t.operations.mapTitle}
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <SatelliteMap />
            </div>
          </motion.div>

          {/* Standar Kualitas */}
          <motion.div variants={childVariants} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="h-7 w-7 text-palm-green" />
              {t.operations.qualityTitle}
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p dangerouslySetInnerHTML={{ __html: t.operations.qualityDesc.replace(/\*(.*?)\*/g, "<em>$1</em>") }}></p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-palm-green/10 text-palm-green rounded-full text-sm font-medium">GAP Certified</span>
                <span className="px-4 py-2 bg-golden-yellow/10 text-earth-brown rounded-full text-sm font-medium">High Yield TBS</span>
                <span className="px-4 py-2 bg-palm-green/10 text-palm-green rounded-full text-sm font-medium">Quality CPO</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">ISPO Compliant</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* NEW: Inovasi Teknologi & Pertanian Presisi Section */}
      <section id="inovasi" className="py-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={childVariants} className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[500px]">
              <Image
                src="/assets/Foto_deteksi.webp"
                alt="Sistem Deteksi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold tracking-wider">SMART DETECTION SYSTEM ACTIVE</span>
                </div>
              </div>
            </motion.div>
            <motion.div variants={childVariants} className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.inovasi.title}</h2>
              <div className="h-1 w-24 bg-palm-green rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.inovasi.desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* NEW: Pemetaan Spasial (WebGIS) Section */}
      <section id="webgis" className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={childVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.webgis.title}</h2>
              <div className="h-1 w-24 bg-palm-green rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.webgis.desc}
              </p>
            </motion.div>
            <motion.div variants={childVariants} className="relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[500px] border-4 border-gray-100">
              <Image
                src="https://bookdown.org/einavg7/sp_technical_guide/images/lulcla.png"
                alt="WebGIS Pemetaan Spasial"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* NEW: Tata Kelola SDM Section */}
      <section id="hr" className="py-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={childVariants} className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[500px]">
              <Image
                src="https://memory.co.ke/wp-content/uploads/2022/08/human-resource-management-software.jpg"
                alt="Dashboard HR"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={childVariants} className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.hr.title}</h2>
              <div className="h-1 w-24 bg-palm-green rounded-full" />
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.hr.desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Keberlanjutan & CSR Section */}
      <section id="sustainability" className="py-20 bg-gradient-to-br from-palm-green to-earth-brown text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-golden-yellow/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">{t.sustainability.title}</h2>
            <div className="mt-4 h-1 w-24 bg-golden-yellow mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Komitmen Lingkungan ISPO */}
            <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Leaf className="h-7 w-7 text-golden-yellow" />
                {t.sustainability.envTitle}
              </h3>
              <p className="text-white/90 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.sustainability.envDesc.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}></p>
            </motion.div>

            {/* Pemberdayaan Masyarakat */}
            <motion.div variants={childVariants} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="h-7 w-7 text-golden-yellow" />
                {t.sustainability.commTitle}
              </h3>
              <p className="text-white/90 leading-relaxed mb-4">
                {t.sustainability.commDesc}
              </p>
              <div className="flex items-center gap-2 text-golden-yellow font-semibold bg-black/20 p-4 rounded-xl">
                <Heart className="h-5 w-5" />
                {t.sustainability.plasma}
              </div>
            </motion.div>
          </div>

          {/* CSR & Bantuan Sosial Grid */}
          <motion.div variants={childVariants} className="mt-12 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold mb-8 text-center">{t.sustainability.csrTitle}</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center p-4 group hover:bg-white/5 rounded-2xl transition-colors">
                <div className="w-16 h-16 bg-golden-yellow/20 group-hover:bg-golden-yellow/40 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Heart className="h-8 w-8 text-golden-yellow" />
                </div>
                <p className="text-sm text-white/90">{t.sustainability.csr1}</p>
              </div>
              <div className="text-center p-4 group hover:bg-white/5 rounded-2xl transition-colors">
                <div className="w-16 h-16 bg-golden-yellow/20 group-hover:bg-golden-yellow/40 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Users className="h-8 w-8 text-golden-yellow" />
                </div>
                <p className="text-sm text-white/90">{t.sustainability.csr2}</p>
              </div>
              <div className="text-center p-4 group hover:bg-white/5 rounded-2xl transition-colors">
                <div className="w-16 h-16 bg-golden-yellow/20 group-hover:bg-golden-yellow/40 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Building2 className="h-8 w-8 text-golden-yellow" />
                </div>
                <p className="text-sm text-white/90">{t.sustainability.csr3}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* NEW: Galeri CSR & Komunitas Section */}
      <section id="csr-gallery" className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.csrGallery.title}</h2>
            <div className="mt-4 h-1 w-24 bg-palm-green mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.csrGallery.desc}</p>
          </div>

          <motion.div variants={childVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedImage(img.src)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group ${idx === 0 ? 'col-span-2 row-span-2 h-64 md:h-[400px]' : 'h-48 md:h-[192px]'
                  }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-sm font-semibold tracking-wider flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Buka Dokumentasi
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* NEW: Berita & CSR Media Coverage Section */}
      <section id="news" className="py-20 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.news.title}</h2>
            <div className="mt-4 h-1 w-24 bg-palm-green mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* News Articles */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Penyaluran Bansos Sembako Ramadhan",
                  source: "Website Resmi Desa Air Batu Buding",
                  link: "https://www.airbatubuding.desa.id/berita/read/penyaluran-bansos-sembako-oleh-pt-rebinmas-jaya-kepada-masyarakat-desa-air-batu-buding-1902052002/0"
                },
                {
                  title: "Bantuan Sembako ke 7 Desa Area Perkebunan",
                  source: "Portal Berita KejarFakta (Babel)",
                  link: "https://babel2.kejarfakta.co/news/54802/pt-rebinmas-jaya-salurkan-bantuan-sembako-ke-7-desa-di-bulan-ramadhan"
                },
                {
                  title: "Penyerahan Dana CSR untuk 7 Desa di Belitung dan Belitung Timur",
                  source: "Media Jejak Kasus",
                  link: "https://www.jejakkasus.co.id/pt-rebinmas-jaya-berikan-csr-untuk-7-desa-di-belitung-dan-belitung-timur/"
                },
                {
                  title: "Bantuan Beasiswa dan Sembako",
                  source: "Arsip Setda Kabupaten Belitung",
                  link: "https://setda.belitung.go.id/desa-aik-batu-buding-terima-bantuan-csr-pt-rebinmas-jaya/"
                }
              ].map((news, idx) => (
                <motion.a
                  key={idx}
                  href={news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={childVariants}
                  className="block group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-palm-green/30"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {t.news.latestNews}
                    </span>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-palm-green transition-colors" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-palm-green transition-colors mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">{t.news.source}: {news.source}</p>
                  <span className="text-sm font-medium text-palm-green flex items-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">
                    {t.news.readMore} <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Featured Video Component */}
            <motion.div variants={childVariants} className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <Play className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-gray-900">{t.news.videoTitle}</h3>
                </div>
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 mt-auto">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/MKUJY6S23k4"
                    title="Video Penyerahan Dana CSR 7 Desa"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                  </iframe>
                </div>
                <p className="mt-4 text-sm text-gray-600 text-center">
                  Dokumentasi acara penyerahan bantuan dana CSR perusahaan kepada masyarakat di 7 desa.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Hubungi Kami Section */}
      <section id="contact" className="py-20 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t.contact.title}</h2>
            <div className="mt-4 h-1 w-24 bg-palm-green mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <motion.div variants={childVariants} className="space-y-8">
              {/* Kantor Kebun */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Factory className="h-6 w-6 text-palm-green" />
                  {t.contact.estateOffice}
                </h3>
                <div className="text-gray-600 space-y-4">
                  <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-palm-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Parit Gunung Estate</strong><br />
                      {t.operations.districtBadau}
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-palm-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Air Ruak Estate</strong><br />
                      {t.operations.districtTimur}
                    </span>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-palm-green mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Darul Makmur Estate (Pelepak Pute)</strong><br />
                      {t.operations.districtBelitung}
                    </span>
                  </p>
                </div>
              </div>

              {/* Kantor Induk (Head Office) */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-palm-green" />
                  {t.contact.headOffice}
                </h3>
                <div className="text-gray-600 space-y-2">
                  <p className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-palm-green mt-0.5 flex-shrink-0" />
                    <span>
                      Dusun Parit Gunung, Desa Air Batu Buding<br />
                      Kecamatan Badau, Tanjung Pandan 33451<br />
                      Belitung, Kepulauan Bangka Belitung
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-palm-green flex-shrink-0" />
                    <span>(021) 51401888</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={childVariants} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t.contact.formTitle}</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.nameLbl}</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-palm-green focus:border-transparent transition-all outline-none"
                      placeholder={t.contact.namePh}
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.emailLbl}</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-palm-green focus:border-transparent transition-all outline-none"
                      placeholder={t.contact.emailPh}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.subjLbl}</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-palm-green focus:border-transparent transition-all outline-none"
                    placeholder={t.contact.subjPh}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.msgLbl}</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-palm-green focus:border-transparent transition-all resize-none outline-none"
                    placeholder={t.contact.msgPh}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-palm-green hover:bg-palm-green-hover text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {t.contact.submitBtn}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-brown text-white py-12 border-t-4 border-palm-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="bg-white inline-block p-2 rounded-lg mb-4">
                <Image src="/assets/logo.webp" alt="Logo" width={48} height={48} />
              </div>
              <h4 className="text-lg font-bold mb-2 text-golden-yellow">PT Rebinmas Jaya</h4>
              <p className="text-white/80 text-sm leading-relaxed pr-4">
                {t.footer.desc}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-golden-yellow">{t.footer.navTitle}</h4>
              <ul className="text-white/80 text-sm space-y-2">
                <li><a href="#kilasan" className="hover:text-white transition-colors">{t.glance.title}</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">{t.about.title}</a></li>
                <li><a href="#operations" className="hover:text-white transition-colors">{t.operations.title}</a></li>
                <li><a href="#sustainability" className="hover:text-white transition-colors">{t.sustainability.title}</a></li>
                <li><a href="#news" className="hover:text-white transition-colors">{t.news.title}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.contact.title}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-golden-yellow">{t.footer.contactTitle}</h4>
              <div className="text-white/80 text-sm space-y-3">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-golden-yellow" />
                  (021) 51401888
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-golden-yellow" />
                  info@rebinmas.com
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-golden-yellow mt-0.5 flex-shrink-0" />
                  Belitung, Bangka Belitung
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <span>Pusat Data Karyawan</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 lg:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[110]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Galeri CSR Full"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
