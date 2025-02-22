'use client'
import Hero from "@/app/components/hero"
import About from "@/app/components/about"
import Brands from "@/app/components/brands"
import Influencers from "@/app/components/influencers"
import Services from "@/app/components/services"
// import Features from "@/components/features"
// import Testimonials from "@/components/testimonials"
import Stats from "@/app/components/stats"
// import Pricing from "@/components/pricing"
import Contact from "@/app/components/contact"
import Footer from "@/app/components/footer"
import { useEffect, useState } from "react"
import { setTimeout } from "node:timers"
import WelcomePopup from "./components/WelcomePopup"
import { document } from "postcss"
import { json } from "node:stream/consumers"

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if(!sessionStorage.getItem('openPop')){
        const body = window.document.querySelector('body') as HTMLElement;
        body.style.overflow = 'hidden';
        setShowPopup(true);
      }
    }, 3000);
  }, []);

  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <Influencers />
        <About />
        <Brands />
        <Services />
        {/* <Features /> */}
        <Stats />
        {/* <Testimonials />
        <Pricing /> */}
        <Contact />
        <Footer />
      </main>
      {
        showPopup && <WelcomePopup showPopup={showPopup} setShowPopup={setShowPopup}></WelcomePopup>
      }
    </>
  )
}

