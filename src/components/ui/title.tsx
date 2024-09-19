import React from 'react'
import { motion } from 'framer-motion'

type TitleProps = {
    text: string;
    bg: string;
    className?: string;
}

const Title = ({ bg, text, className }: TitleProps) => {

    return (
        <h1
            className={`masked ${className} group bg-center bg-cover`}
            style={{ backgroundImage: `url(${bg})` }}
        >
            {text}
            <span
                className='maskedInner'
                style={{ backgroundImage: `url(${bg})` }}
            >
                {text}
            </span>
            <span
                className='maskedInner2 group-hover:scale-125 transition-all duration-700'
                style={{ backgroundImage: `url(${bg})` }}
            >
                {text}
            </span>
        </h1>

    )
}

export default Title