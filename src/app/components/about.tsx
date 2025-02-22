"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Target, Zap } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Matching",
    description: "Connect with the perfect influencers for your brand using our advanced matching algorithm.",
  },
  {
    icon: Target,
    title: "Campaign Management",
    description: "Streamline your influencer campaigns with our comprehensive management tools.",
  },
  {
    icon: Zap,
    title: "Real-time Analytics",
    description: "Track and measure campaign performance with detailed analytics and insights.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 bg--black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text--white">Why Choose Influexon?</h2>
          <p className="mt-4 text-lg text-gray-600 text--white">
            We bring brands and influencers together to create authentic partnerships that drive real results.
          </p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white bg--black border-2 border-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text--white">{feature.title}</h3>
              <p className="text-gray-600 text--white">{feature.description}</p>
              {/* <ArrowRight className="h-5 w-5 text-primary mt-4" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

