"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const influencers = [
  {
    name: "Fashion & Lifestyle",
    followers: "1M+",
    image: "/cel.jpg",
  },
  {
    name: "Tech & Gaming",
    followers: "500K+",
    image: "/cel.jpg",
  },
  {
    name: "Food & Travel",
    followers: "750K+",
    image: "/cel.jpg",
  },
  {
    name: "Health & Fitness",
    followers: "900K+",
    image: "/cel.jpg",
  },
]

export default function Influencers() {
  return (
    <section id="influencers" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Top Influencer Categories</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with influencers across various niches and reach your target audience
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {influencers.map((influencer, index) => (
            <motion.div
              key={influencer.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={influencer.image || "/placeholder.svg"}
                alt={influencer.name}
                width={300}
                height={400}
                className="w-full h-[400px] object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold">{influencer.name}</h3>
                <p className="text-sm opacity-90">{influencer.followers} Followers</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

