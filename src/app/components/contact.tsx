"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">team@influexon.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+91 91713-08396</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Location</h3>
                <p className="mt-1 text-gray-600">
                  511, NRK BIZ PARK behind C-21 MALL
                  <br />
                  Indore, Madhya Pradesh 452018
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

