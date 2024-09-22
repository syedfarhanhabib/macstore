import React from 'react'
import { motion } from 'framer-motion'

type TitleProps = {
    children: React.ReactNode;
    bg: string;
    className?: string;
}

const Title = ({ bg, children, className }: TitleProps) => {

    return (
        <h1
            className={`masked ${className} group bg-center bg-cover`}
            style={{ backgroundImage: `url(${bg})` }}
        >
            {children}
            <span
                className='maskedInner'
                style={{ backgroundImage: `url(${bg})` }}
            >
                {children}
            </span>
            <span
                className='maskedInner2 !opacity-15 group-hover:scale-125 transition-all duration-700'
                style={{ backgroundImage: `url(${bg})` }}
            >
                {children}
            </span>
        </h1>

    )
}

export default Title