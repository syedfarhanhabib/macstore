"use client"
import { motion } from 'framer-motion';
import React from 'react'

interface tagProps {
    text: string;  // Text to display in the tag.
}

const Tag = ({ text }: tagProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }} // Ensures the scaling happens from top to bottom
            className='bg-accent text-background z-[4] w-full py-3 absolute left-0 top-28'
        >
            <p className='leading-none text-sm px-10 tracking-tighter text-center'>{text}</p>
        </motion.div>
    )
}

export default Tag