'use client';
import MultistepForm from '@/components/component/multistep-form';
import QuizForm from '@/components/component/quizForm';
import SubNav from '@/components/ui/subNav'
import ThemeSwitch from '@/components/ui/theme';
import React, { useState } from 'react'
const page = () => {
    const navLinks = [
        { label: "Info", href: "#info" },
        { label: "Form", href: "#choose-best" }
    ]
    return (
        <main>
            <ThemeSwitch defaultTheme="light" />
            <SubNav navLinks={[]} title='Choose yours' btnLink='/' btnLabel='Shop' />
            <section id='info' className='pt-36 px-section min-h-dvh'>
                <h1 className='heading text-center' >iMac.</h1>
            </section>
            <section id='choose-best' className='w-full pt-32 px-section min-h-dvh pb-5 '>
                {/* <QuizForm/> */}
                <MultistepForm />
            </section>
        </main>
    )
}

export default page