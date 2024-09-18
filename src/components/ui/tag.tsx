"use client"
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

interface tagProps {
    text: string;  // Text to display in the tag.
}

const Tag = ({ text }: tagProps) => {
    return (
        <>
            <div className='absolute left-0 top-28 w-full' >
                <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    whileInView={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: "top" }}
                    className='group bg-accent text-background z-[4] w-full py-3 relative overflow-hidden cursor-pointer'
                >
                    <div className='absolute transition-all duration-700 group-hover:translate-y-0 group-hover:scale-y-100 scale-y-0 -translate-y-full inset-0 bg-foreground w-full h-full' />
                    <p className='flex items-center transition-all duration-700 gap-2 justify-center leading-none text-sm px-10 tracking-tighter text-center relative z-10 group-hover:underline'>
                        {text} <FaArrowRightLong className=' hidden group-hover:bloc' />
                    </p>
                </motion.div>
            </div>
        </>
    )
}

export default Tag