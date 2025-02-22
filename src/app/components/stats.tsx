"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const stats = [
  { label: "Active Brands", value: 50, suffix:"+"},
  { label: "Influencers", value: 500, suffix:"+" },
  { label: "Campaigns", value: 20 },
  { label: "Success Rate", value: 95, suffix: "%" },
]

function Counter({ from, to, duration = 2 }: {from:any, to:any, duration: any}) {
  const [count, setCount] = useState(from)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(from + (to - from) * progress))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [from, to, duration])

  return count
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  return (
    <section id="stats" ref={ref} className="py-24 bg-gradient-to-b from-background to-accent">
      <motion.div style={{ scale, opacity }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
              >
                <div className="text-2xl font-bold text-primary">
                  <Counter from={0} to={stat.value} duration={2} />
                  {stat.suffix}
                </div>
              </motion.div>
              <h3 className="text-lg font-semibold">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

