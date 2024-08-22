import SubNav from '@/components/ui/subNav'
import React from 'react'

const page = () => {
    const navLinks = [
        { label: 'Overview', href: '#my-pc' },
        { label: 'Tech specs', href: '#this' },
    ];
    return (
        <main>
            <SubNav title='iMac' navLinks={navLinks} btnLink='/' btnLabel='Buy' />
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