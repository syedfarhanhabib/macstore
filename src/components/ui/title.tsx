import React from 'react'

type TitleProps = {
    text: string;
    bg: string;
    className?: string;
}
// before:(content-[""] absolute w-full h-full left-0 top-0 bg-clip-text bg-cover opacity-70)
const Title = ({ bg, text, className }: TitleProps) => {
    return (
        <h1
            className={`masked ${className} bg-center bg-cover`}
            style={{ backgroundImage: `url(${bg})`}}
        >
            {text}
            <span
                className='maskedInner'
                style={{ backgroundImage: `url(${bg})` }}
            >
                {text}
            </span>
            <span
                className='maskedInner2'
                style={{ backgroundImage: `url(${bg})` }}
            >
                {text}
            </span>
        </h1>

    )
}

export default Title