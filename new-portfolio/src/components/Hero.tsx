import React, { DOMElement } from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
function Hero() {

    return (
        <div>
            <div className={`${styles.paddingX} w-full flex flex-col justify-center`}>
                <ul className='overflow-hidden w-full'>
                    <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: 100, opacity: 1 }} transition={{ ease: "easeOut", duration: 0.6 }}
                        className='z-0 text-6xl'>
                        Hi!
                    </motion.div>
                </ul>
                <ul className='overflow-hidden w-full'>
                    <motion.div animate={{ y: 0, opacity: 1 }} initial={{ y: -400, opacity: 1 }} transition={{ ease: "easeOut", duration: 1, delay: 0.2 }}
                        className='text-4xl z-20 w-full h-full'>
                        I'm Hansoo, a software developer on a mission to turn ideas into innovative solutions. Explore my projects and let's shape the future together!
                    </motion.div>
                </ul>
            </div>
        </div>
    )
}

export default Hero