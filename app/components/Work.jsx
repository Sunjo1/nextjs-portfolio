import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

function Work({ isDarkMode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-16 scroll-mt-20'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo text-gray-500 dark:text-white'>My Portfolio</motion.h4>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='text-center text-5xl font-Ovo font-bold text-gray-900 dark:text-white'>My Latest Work</motion.h3>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className='max-w-2xl mx-auto text-center mt-5 mb-12 font-Ovo text-gray-600 dark:text-white'>
                Welcome to my portfolio! Here, you'll find a selection of my latest projects that showcase my skills and expertise in front-end web development. Each project highlights my ability to create responsive, user-friendly, and visually appealing web applications using the latest technologies. Feel free to explore my work and see how I can help bring your ideas to life.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6 }}

                className='grid grid-cols-auto gap-6 my-10 dark:text-black'>
                {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        className='relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl'
                    >
                        {/* Project image */}
                        <Image
                            src={project.bgImage}
                            alt={project.title}
                            width={550}
                            height={400}
                            className='w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110'
                        />

                        {/* Gradient overlay for readability */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

                        {/* Floating info card */}
                        <div className='absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 px-5 py-4 rounded-xl backdrop-blur-md bg-white/80 shadow-lg flex items-center justify-between transition-all duration-500 group-hover:bottom-8'>
                            <div>
                                <h2 className='text-lg font-semibold text-gray-900'>{project.title}</h2>
                                <p className='text-sm text-gray-600'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center
                            shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                <Image
                                    src={assets.send_icon}
                                    alt='Send Icon'
                                    className='w-6 opacity-70 group-hover:opacity-100 transition-opacity'
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                href='#' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
            border-gray-700 rounded-full px-10  mx-auto my-20 hover:bg-lightHover duration-500 py-3 dark:text-white
            dark:border-white dark:hover:bg-darkHover'>
                Show more<Image alt='right-arrow' src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} className='w-4' />
            </motion.a>
        </motion.div>
    )
}

export default Work
