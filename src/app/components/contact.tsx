"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import emailjs from 'emailjs-com';
import { useState } from 'react';

export default function Contact() {
  const address = "https://www.google.com/maps/place/NRK+BizPark/@22.7454853,75.8944308,16.36z/data=!4m6!3m5!1s0x3962fdeb6743d8db:0xc94c7ca59c794fe7!8m2!3d22.7457975!4d75.8963479!16s%2Fg%2F11jrjzcjtg?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"

  // State for managing the form submission
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // to track submission status

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // EmailJS service details
    const serviceID = 'YOUR_SERVICE_ID'; // Replace with your service ID
    const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
    const userID = 'YOUR_USER_ID'; // Replace with your user ID

    try {
      const response = await emailjs.send(serviceID, templateID, formData, userID);
      console.log('Email sent successfully:', response);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form after submit
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text--white">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-600 text--white">Have questions? We'd love to hear from you.</p>
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
                <h3 className="text-lg font-semibold text-gray-900 text--white">Email</h3>
                <a title="mail-us" target="_blank" href="mailto:team@influexon.com" className="mt-1 text-blue-600">team@influexon.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 text--white">Phone</h3>
                <p className="mt-1 text-gray-600 text--white">+91 91713-08396</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 text--white">Location</h3>
                <a href={address} title="open-map" target="_blank" className="mt-1 text-blue-600">
                  511, NRK BIZ PARK behind C-21 MALL
                  <br />
                  Indore, Madhya Pradesh 452018
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 text--white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text--white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 text--white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Enter a message"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 px-4 py-2 text-white font-medium hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Message
            </button>
            {status && <p className="mt-4 text-center text-gray-900">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
