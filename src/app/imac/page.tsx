import SubNav from '@/components/ui/subNav'
import React from 'react'

const page = () => {
    return (
        <main>
            <SubNav title='iMac' btnLink='/' btn='Buy' btn1='My pc' link1='#my-pc' btn2='This' link2='#this'  />
            <section id='my-pc' className='pt-36 px-section min-h-dvh'>
                <h1 className='heading text-center' >iMac.</h1>
            </section>
            <section id='this' className='pt-20 px-section min-h-dvh'>
                <h1 className='heading text-center' >iMac.</h1>
            </section>

        </main>
    )
}

export default page