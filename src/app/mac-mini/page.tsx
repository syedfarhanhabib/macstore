"use client"
import { Button } from '@/components/ui/button'
import SubNav from '@/components/ui/subNav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Tag from '@/components/ui/tag'
import ThemeSwitch from '@/components/ui/theme'
import Title from '@/components/ui/title'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const performance = [
        { label: "Mac mini with M2 Pro", percentage: "w-[100%]", color: "bg-gradient-to-r from-blue-300 to-blue-700", figure: "4.7x" },
        { label: "Mac mini with M2", percentage: "w-[80%]", color: "bg-gradient-to-r from-yellow-300 to-purple-700", figure: "3.6x" },
        { label: "Mac mini with M1", percentage: "w-[70%]", color: "bg-gradient-to-r from-green-300 to-green-700" },
        { label: "iMac 27‑inch with Core i7 and Radeon Pro 5500 XT", percentage: "w-[40%]", color: "bg-gradient-to-r from-zinc-100 to-zinc-700" },
        { label: "Mac mini with Core i7 (baseline)", percentage: "w-[10%]", color: "bg-gradient-to-r from-zinc-100 to-zinc-300" },
    ]
    const navLinks = [
        { label: 'Overview', href: '#overview' },
        { label: 'Tech specs', href: '#tech-specs' },
        { label: 'Compare', href: '#compare' },
    ];
    return (
        <main className='pb-40 light'>
            <ThemeSwitch defaultTheme='dark' />
            <SubNav
                title="Mac mini"
                navLinks={navLinks}
                btnLink="/mac-mini/buy"
                btnLabel="Buy Now"
            />
            <Tag text="Buy Mac mini starting at $499 with education savings. And now through 9/30, get a $100 gift card. Δ " />
            <section id='overview' className=' min-h-dvh max-h-max sm:h-[120vh] md:h-[140vh] lg:h-[160vh] flex flex-col justify-between items-center pb-10 pt-36' >
                <Image src={"/mini-cover.jpg"} height={1000} width={1000} alt='mini' className='w-full object-contain saturate-[1.25] contrast-[.93] z-0' />
                <div className="grid lg:-mt-36 z-[3] text-center w-full py-5 bg-gradient-to-t from-background via-background to-background/0">
                    {/* <h5 className='heading w-fit left-1/2 -translate-x-1/2 masked'>Mac mini</h5> */}
                    <Title text='Mac mini.' bg='/red.png' className='heading absolute left-1/2 -translate-x-1/2' />
                    <p className='lg:px-60 px-10 desc' >Mac mini with M2 packs the speed you need to get more done faster. And M2 Pro takes it to a whole new level — bringing a pro chip to Mac mini for the first time. Add to that a versatile array of ports and you’ve got a desktop ready to flex in any setup, no matter which chip you choose.</p>
                    <Button variant={"secondary"} className='mx-auto mt-2'>From $599</Button>
                </div>
            </section>
            <section id='tech-specs' className='min-h-dvh px-section grid gap-5 lg:gap-10 pt-10 scroll-mt-16' >
                <div className="card1 w-full h-fit bg-muted p-10 rounded-3xl bg-gradient-to-tr from-purple-900 to-blue-900">
                    <h5 className='heading' >Speed and capability</h5>
                    <h5 className='subtitle' >Photo editing/Image upscaling/Video editing/Video transcoding/Code compiling/Productivity</h5>
                    <div className='grid gap-5 mt-10 w-full ' >
                        {performance.map((item, index) => (
                            <React.Fragment key={index} >
                                <div className='grid relative items-center gap-2 w-[80%]'>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        transition={{ duration: 0.5, ease: 'linear' }}
                                        viewport={{ once: true }}
                                        className={`progress-bar h-2 rounded-full ${item.color} ${item.percentage}`} />
                                    <h4>{item.label}</h4>
                                    {item.figure && (
                                        <h2 className={`${item.color} bg-clip-text text-transparent font-bold tracking-tighter text-2xl absolute -right-20 lg:-right-40 top-0`}>{item.figure}</h2>
                                    )}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="card2 relative w-full h-[80vh] bg-muted p-10 rounded-3xl bg-gradient-to-br from-pink-700 to-yellow-700">
                    <h5 className='subtitle' >Compatibility</h5>
                    <h1 className='heading pt-5 lg:pt-20'>Mini does that.</h1>
                    <p className='subtitle md:w-1/2' >With macOS, your go‑to apps run lightning fast on Mac mini — from Microsoft 365 to Adobe Creative Cloud to Zoom. And thousands of apps are optimized for M2 and M2 Pro.</p>
                    <Image src={"/mini-compatibility.png"} height={5000} width={1000} alt='' className='md:h-full h-fit w-fit object-contain absolute right-0 bottom-0 md:top-0' />
                </div>
                <div className="card3 w-full grid grid-cols-12 gap-5 lg:gap-10">
                    <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-purple-950 to-purple-500 h-[90vh] md:col-span-8 col-span-12 rounded-3xl">
                        <div className="">
                            <h5 className='title' >Design</h5>
                            <h5 className='subtitle' >Whether you choose M2 or M2 Pro, the performance and efficiency of Apple silicon allow Mac mini to blow away desktops many times its size — all in an iconic 7.7‑inch‑square frame.</h5>
                        </div>
                        <div className='flex items-end'>
                            <Image src={"/pc mini.svg"} height={100} width={100} alt='' className='mb-4 mr-2' />
                            <h1 className='heading w-3/4 float-right' >Towering performance. Minus the tower.</h1>
                        </div>
                    </div>
                    <div className=" bg-blue-600 h-[90vh] col-span-12 md:col-span-4 rounded-3xl"></div>
                </div>
            </section>
            <section id='compare' className='py-40 px-section relative overflow-hidden' >
                <div className="md:px-44 pb-72 z-20">
                    <h1 className='gradientText heading' >Versatility <br /> All systems go.</h1>
                    <p className='text-xl desc' >
                        With its next-level performance, wide array of ports, and compact size, this mini desktop is perfect for an impressive range of uses — and ready to take on whatever you do.
                    </p>
                </div>
                <Image src={"/mini-system.jpg"} height={6000} width={3000} alt='' className='w-[80rem] z-[1] h-fit scale-[1.7] object-contain pt-20' />
            </section>
            <div className="-mt-36 hidden md:block absolute left-1/2 -translate-x-1/2 z-[2] ">
                <Tabs className='grid gap-5 text-center' defaultValue='productivity' >
                    <TabsList className='w-fit mx-auto '>
                        <TabsTrigger value='productivity' >Productivity</TabsTrigger>
                        <TabsTrigger value='development' >Software development</TabsTrigger>
                        <TabsTrigger value='audio-video' >Audio and video production</TabsTrigger>
                    </TabsList>
                    <TabsContent value='productivity' >
                        <p className='desc text-xl' >Mac mini turns any desk into a powerful workspace. Add a display, keyboard, and mouse or trackpad, and you’re ready to create, code, and collaborate.</p>
                    </TabsContent>
                    <TabsContent value='development' >
                        <p className='desc text-xl' >Whether you choose M2 or M2 Pro, Mac mini gives you the tools you need to create powerful apps or games.</p>
                    </TabsContent>
                    <TabsContent value='audio-video' >
                        <p className='desc text-xl' >Mac mini is a powerful desktop for content creation. Run more plug‑ins and layer more audio tracks in Logic Pro. And edit multiple streams of 4K and 8K ProRes video in Final Cut Pro faster with the help of the high‑performance media engine.</p>
                    </TabsContent>
                </Tabs>
            </div>


        </main>
    )
}

export default page