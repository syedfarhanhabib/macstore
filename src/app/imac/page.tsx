import SubNav from '@/components/ui/subNav'
import ThemeSwitch from '@/components/ui/theme';
import Title from '@/components/ui/title';
import React from 'react'

const page = () => {
    const navLinks = [
        { label: 'Overview', href: '#my-pc' },
        { label: 'Tech specs', href: '#this' },
    ];
    return (
        <main>
            <ThemeSwitch defaultTheme='dark' />
            <SubNav title='iMac' navLinks={navLinks} btnLink='/' btnLabel='Buy' />
            <section id='my-pc' className='pt-36 px-section min-h-dvh'>
                {/* <h1 className='heading masked text-center w-fit ' >iMac.</h1> */}
                <Title text='iMac Pro' bg='/red.png' className='heading absolute left-1/2 -translate-x-1/2' />
            </section>
            <section id='this' className='pt-20 px-section min-h-dvh'>
                <h1 className='heading text-center' >iMac.</h1>
            </section>
        </main>
    )
}

export default page