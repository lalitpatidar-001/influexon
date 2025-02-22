"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const socialLinks = [
  // { name: "Facebook", icon: Facebook, href: "#" },
  // { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/influexon" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/influexon/" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">About Influexon</h3>
            <p className="text-gray-400">
              Connecting brands with influencers to create authentic and impactful marketing campaigns.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {["Brand Partnerships", "Campaign Management", "Analytics", "Consulting"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} Influexon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

