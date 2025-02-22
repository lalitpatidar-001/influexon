"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const brands: any[] = [
  { name: "Brand 1", logo: "/ps.png" },
  { name: "Brand 2", logo: "/ps.png" },
  { name: "Brand 3", logo: "/ps.png" },
  { name: "Brand 4", logo: "/ps.png" },
  { name: "Brand 5", logo: "/ps.png" },
  { name: "Brand 6", logo: "/ps.png" },
]

export default function Brands() {
  return (
    <section id="brands" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text--white">Trusted by Leading Brands</h2>
          <p className="mt-4 text-lg text-gray-600 text--white">Join hundreds of successful brands using our platform</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                width={120}
                height={60}
                className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

