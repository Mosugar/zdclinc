'use client'

import Header from '../components/Header'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Important from '../components/home/Important'
import Team from '../components/home/Team'
import Testimonial from '../components/home/Testimonial'
import Faqs from '../components/home/Faqs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Banner from '../components/home/Banner'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Important />
        <Team />
        <Testimonial />
        <Banner />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}