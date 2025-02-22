"use client"

import { motion } from "framer-motion"
import Image from "next/image"

enum AccountTypeEnum {
  INSTAGRAM = "Instagram",
  YOUTUBE = "Youtube",
  LINKEDIN = "LinkedIn",
  TWITTER = "Twitter"
}

const influencers = [
  {
    name: "Classic Gears",
    followers: "300K+",
    image: "/shivraj_jadhav.jpg",
    accType: AccountTypeEnum.YOUTUBE,
    link: "https://www.youtube.com/channel/UCKAzZtxqNwZeUJiXTGSsaxw",
  },
  {
    name: "mananify",
    followers: "50K+",
    image: "/mannan.jpg",
    accType: AccountTypeEnum.INSTAGRAM,
    link: "https://www.instagram.com/mananify/",
  },
  {
    name: "Jay Choudhary",
    followers: "24K+",
    image: "/jay_choudhary.jpg",
    accType: AccountTypeEnum.YOUTUBE,
    link: "https://www.youtube.com/channel/UCzy6WZzVO65-B7Vw0klrQLQ",
  },
  {
    name: "Aadhya Sharma",
    followers: "900K+",
    image: "/cel.jpg",
    accType: AccountTypeEnum.INSTAGRAM,
    link: "",
  },
]

export default function Influencers() {

  function getAccountTypeLogo(accType: string) {
    switch(accType) {
      case AccountTypeEnum.INSTAGRAM:
        return '/instagram-logo.png';
      case AccountTypeEnum.YOUTUBE:
        return '/youtube-logo.png';
      
    }
  }
  return (
    <section id="influencers" className="py-24 bg-gray-50 bg--black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text--white">Top Influencer Categories</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto text--white">
            Connect with influencers across various niches and reach your target audience
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {influencers.map((influencer, index) => (
            <a href={influencer.link} target="_blank" key={influencer.name}
            title={AccountTypeEnum.INSTAGRAM === influencer.accType ? 'Go to page' : 'Go to channel'}>
              <motion.div
                
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                <Image
                  src={influencer.image || "/placeholder.svg"}
                  alt={influencer.name}
                  width={300}
                  height={400}
                  className="w-full h-[400px] object-cover cursor-pointer transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center">
                    <img className="h-9 w-9 -ml-[5px]" src={getAccountTypeLogo(influencer.accType)}/>
                    <h3 className="text-xl font-semibold">{influencer.name}</h3>
                  </div>
                  <p className="text-sm opacity-90">{influencer.followers} Followers</p>
                  {/* <p className="text-sm opacity-90">{influencer.name}</p> */}
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

