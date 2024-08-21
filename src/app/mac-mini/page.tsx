import SubNav from '@/components/ui/subNav'
import Tag from '@/components/ui/tag'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <main>
            <SubNav title='Mac mini' link='/' btn='Buy' />
            <Tag text="Buy Mac mini starting at $499 with education savings. And now through 9/30, get a $100 gift card. Δ " />
            <section className='min-h-dvh pt-28' >
                <Image src={"/mini-cover.jpg"} height={1000} width={1000} alt='mini' className='w-full mix-blend-plus-darker' />
                {/* <h1 className='heading text-center center bg-background leading-tight' >Mac mini</h1> */}
            </section>
            <section className='relative' >
                <div className="grid gap-5 text-center">
                    <p>Mac mini</p>
                    <h1 className='gradientText heading font-bold' >More muscle. <br /> More hustle.</h1>
                </div></section>
        </main>
    )
}

export default page