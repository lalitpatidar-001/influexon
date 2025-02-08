"use client"

import { motion } from "framer-motion"
import { Sparkles, BarChart, MessageSquare, Shield } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Campaign Creation",
    description: "Create and launch influencer marketing campaigns with ease.",
  },
  {
    icon: BarChart,
    title: "Performance Tracking",
    description: "Monitor campaign metrics and ROI in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Direct Messaging",
    description: "Communicate directly with influencers through our platform.",
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "Ensure your brand collaborates with the right influencers.",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools and services to power your influencer marketing strategy
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

