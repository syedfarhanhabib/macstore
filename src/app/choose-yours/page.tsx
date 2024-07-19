'use client';
import GptForm from '@/components/component/gptForm';
import MultistepForm from '@/components/component/multistep-form';
import QuizForm from '@/components/component/quizForm';
import SubNav from '@/components/ui/subNav'
import React, { useState } from 'react'
const page = () => {
    return (
        <main>
            <SubNav title='Choose yours' link='/' btn='Shop' />
            <section className='pt-36 px-section min-h-dvh'>
                <h1 className='heading text-center' >iMac.</h1>
            </section>
            <section className='w-full pt-32 px-section min-h-dvh pb-5 '>
                {/* <QuizForm/> */}
                {/* <MultistepForm /> */}
                <GptForm />
            </section>
        </main>
    )
}

export default page