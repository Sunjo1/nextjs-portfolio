import React from 'react'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>What I Offer</motion.h4>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-center text-5xl font-Ovo'>My Services</motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className='max-w-2xl mx-auto text-center mt-5 mb-12 font-Ovo'>
                I am a front-end web developer with over 10 years of experience in creating responsive and user-friendly web applications. I specialize in using the latest technologies to build high-quality websites that meet the needs of my clients.
            </motion.p>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}
                className='grid grid-cols-auto gap-6 my-10 '>
                {serviceData.map(({ icon, title, description, link }, index) => {
                    return <motion.div
                        whileHover={{ scale: 1.05 }}
                        key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover: shadow-black
                    cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 text-center
                    dark:hover:bg-darkHover dark:hover:shadow-white'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm text-gray-500 leading-5 dark:text-white/80'>{description}</p>
                        <a href={link} className='mt-4 inline-block text-sm font-Ovo text-gray-600 hover:text-gray-900 dark:text-white/80'>
                            Learn more <Image src={assets.right_arrow} alt='arrow' className='w-3 inline-block ml-1' />
                        </a>
                    </motion.div>
                })}
            </motion.div>
        </motion.div>

    )
}

export default Services