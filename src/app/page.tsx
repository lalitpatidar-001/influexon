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

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Brands />
      <Services />
      <Influencers />
      {/* <Features /> */}
      <Stats />
      {/* <Testimonials />
      <Pricing /> */}
      <Contact />
      <Footer />
    </main>
  )
}

