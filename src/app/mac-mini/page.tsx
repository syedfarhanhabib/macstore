import { Button } from '@/components/ui/button'
import SubNav from '@/components/ui/subNav'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Tag from '@/components/ui/tag'
import Image from 'next/image'
import React from 'react'

const page = () => {
    const navLinks = [
        { label: 'Overview', href: '#overview' },
        { label: 'Tech specs', href: '#tech-specs' },
        { label: 'Compare', href: '#compare' },
    ];
    return (
        <main className='pb-40'>
            <SubNav
                title="Product Page"
                navLinks={navLinks}
                btnLink="/buy-now"
                btnLabel="Buy Now"
            />
            <Tag text="Buy Mac mini starting at $499 with education savings. And now through 9/30, get a $100 gift card. Δ " />
            <section id='overview' className='min-h-dvh pt-28' >
                <Image src={"/mini-cover.jpg"} height={1000} width={1000} alt='mini' className='w-full mix-blend-plus-darker' />
            </section>
            <section id='tech-specs' className=' min-h-[50vh]' >
                <div className="grid absolute -mt-20  text-center w-full py-5 bg-gradient-to-t from-background from-80% to-background/0">
                    <h5 className='subtitle'>Mac mini</h5>
                    <h1 className='gradientText heading leading-[3.9rem]' >More muscle. <br /> More hustle.</h1>
                    <p className='px-60 text-xl desc' >Mac mini with M2 packs the speed you need to get more done faster. And M2 Pro takes it to a whole new level — bringing a pro chip to Mac mini for the first time. Add to that a versatile array of ports and you’ve got a desktop ready to flex in any setup, no matter which chip you choose.</p>
                    <Button variant={"secondary"} className='mx-auto mt-2'>From $599</Button>
                </div>
            </section>
            <section id='compare' className='py-40 px-section relative overflow-hidden' >
                <div className="px-44 pb-72 bg-gradient-to-b from-background from-80% to-background/80 to-20% z-20">
                    <h1 className='gradientText heading leading-[3.9rem]' >Versatility <br /> All systems go.</h1>
                    <p className='text-xl desc' >
                        With its next-level performance, wide array of ports, and compact size, this mini desktop is perfect for an impressive range of uses — and ready to take on whatever you do.
                    </p>
                </div>


                <Image src={"/mini-system.jpg"} height={6000} width={3000} alt='' className='w-[80rem] z-[1] h-fit scale-[1.7] object-contain pt-20' />
            </section>
            <div className="-mt-36 absolute left-1/2 -translate-x-1/2 z-[2] ">
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