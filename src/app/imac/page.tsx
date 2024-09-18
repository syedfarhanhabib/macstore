"use client"
import SubNav from '@/components/ui/subNav'
import Tag from '@/components/ui/tag';
import ThemeSwitch from '@/components/ui/theme';
import Title from '@/components/ui/title';
import React, { useEffect, useMemo, useRef } from 'react'
import Lenis from 'lenis'
import Image from 'next/image';
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react';
import { useTheme } from 'next-themes';

const page = () => {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    })

    gsap.registerPlugin(ScrollTrigger);

    const navLinks = [
        { label: 'Overview', href: '#overview' },
        { label: 'Specifications', href: '#specs' },
    ];

    const { setTheme } = useTheme();

    useGSAP(() => {
        document.querySelectorAll('.element').forEach((element, index) => {
            let image = element.querySelector('img');
            let tl = gsap.timeline();

            let xTransform = gsap.utils.random(-100, 100);

            tl
                .set(image, { transformOrigin: `${xTransform < 0 ? 0 : "100%"} center` }, "start")
                .to(image, {
                    scale: 0, ease: "none",
                    scrollTrigger: {
                        trigger: element,
                        start: "18% 18%",
                        end: "bottom 18%",
                        scrub: true
                    }
                }, "start")
                .to(element, {
                    xPercent: xTransform, ease: "none", duration: 1,
                    scrollTrigger: {
                        trigger: image,
                        start: "18% bottom",
                        end: "bottom 18%",
                        scrub: true
                    }
                })
        })

        let last = document.getElementById('specs');

        // Add this new ScrollTrigger for theme change
        ScrollTrigger.create({
            trigger: last,
            start: "bottom top",
            // end: "bottom bottom",
            scrub: true,
            onEnter: () => setTheme('light'),
            onLeaveBack: () => setTheme('dark')
        });
    })

    return (
        <ReactLenis root>
            <main>
                <ThemeSwitch defaultTheme='dark' />
                <SubNav title='iMac' navLinks={navLinks} btnLink='/' btnLabel='Buy' />
                <Tag text="Students save up to $200 on iMac. Plus get a $150 gift card. Offer ends soon." />
                <div className='center !fixed flex flex-col items-center justify-center z-[-1]'>
                    <h1 className="heading  text-center text-white -mb-5">iMac Pro</h1>
                    <h2 className="subtitle text-center text-white">The ultimate all-in-one for professionals</h2>
                </div>
                <section id='overview' className='w-full h-[350vh] overflow-hidden pt-44 relative grid grid-cols-8 gap-20'>
                    {/* <Title text='iMac Pro' bg='/red.png' className='heading center !fixed' /> */}

                    <div className="col-span-2 col-start-1 element">
                        <Image src="/random/1.jpg" alt="Image 1" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-3 element">
                        <Image src="/random/2.jpg" alt="Image 2" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-2 element">
                        <Image src="/random/3.jpg" alt="Image 3" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-5 element">
                        <Image src="/random/4.jpg" alt="Image 4" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-4 element">
                        <Image src="/random/5.jpg" alt="Image 5" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-7 element">
                        <Image src="/random/6.jpg" alt="Image 6" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-6 element">
                        <Image src="/random/7.jpg" alt="Image 7" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-8 element">
                        <Image src="/random/8.jpg" alt="Image 8" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-1 element">
                        <Image src="/random/9.jpg" alt="Image 9" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-4 element">
                        <Image src="/random/10.jpg" alt="Image 10" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-2 element">
                        <Image src="/random/11.jpg" alt="Image 11" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-6 element">
                        <Image src="/random/12.jpg" alt="Image 12" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-3 element">
                        <Image src="/random/13.jpg" alt="Image 13" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-7 element">
                        <Image src="/random/14.jpg" alt="Image 14" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-5 element">
                        <Image src="/random/15.jpg" alt="Image 15" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-8 element">
                        <Image src="/random/16.jpg" alt="Image 16" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-1 element">
                        <Image src="/random/17.jpg" alt="Image 17" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-3 element">
                        <Image src="/random/18.jpg" alt="Image 18" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-2 element">
                        <Image src="/random/19.jpg" alt="Image 19" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                    <div className="col-span-2 col-start-5 element">
                        <Image src="/random/20.jpg" alt="Image 20" className="w-full h-full object-cover rounded-xl" width={1000} height={1000} />
                    </div>
                </section>
                <section id='specs' className='w-full flex flex-col justify-center items-center h-screen  z-[3]' >
                    <div className='h-[60vh] w-3/4 p-10 mt-14 rounded-3xl flex flex-col justify-center items-center bg-foreground text-background'>
                        <p className="subtitle text-left">
                            The iMac Pro is a powerful all-in-one desktop computer designed for professionals who need top-tier performance.
                            It features a stunning 27-inch Retina 5K display, up to 18-core Intel Xeon processors, and up to 256GB of ECC memory.
                            With its Radeon Pro Vega graphics, the iMac Pro is capable of handling the most demanding tasks, from 3D rendering to complex simulations and large-scale video editing.
                        </p>
                        <p className="subtitle text-left mt-5">
                            The iMac Pro also includes a range of advanced connectivity options, including four Thunderbolt 3 ports, 10Gb Ethernet, and support for up to two additional 5K displays.
                            Its sleek, space-gray design and quiet thermal architecture make it a stylish and efficient addition to any professional workspace.
                        </p>
                    </div>
                </section>
            </main>
        </ReactLenis>
    )
}

export default page

// Add this function at the end of the file, outside the componen