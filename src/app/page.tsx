'use client';

import Categories from '@/components/hero/categories';
import { Spotlight } from '@/components/hero/spotlight';
import { cardData } from '@/lib/data';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Lineup from '@/components/hero/lineup';



const Page: React.FC = () => {
  // const heroRef = useRef<HTMLElement | null>(null);

  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["100% 100%", "80% 80%"],
  // });

  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  return (
    <main className="overflow-hidden">
      <section className="hero w-full min-h-dvh pt-36 px-4 md:px-10 flex flex-col gap-5">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="fill-primary"
        />
        <figure className="tracking-tighter leading-none pb-5 font-medium flex flex-col md:flex-row justify-between w-full">
          <h1 className="text-7xl bg-gradient-to-br from-muted-foreground to-primary bg-clip-text text-transparent">
            If you can dream it,
            <br />
            Mac can do it.
          </h1><h3 className="heading">Mac</h3>
        </figure>
        <video
          // style={{ scaleX, opacity: scrollYProgress, scaleY: scrollYProgress, transition: "all ease .2s" }}
          src="/machero.mp4"
          className="w-full rounded-3xl object-cover"
          autoPlay
          muted
          loop
        />
      </section>
      <Categories />
      <section className='carousel px-4 md:px-10' >
        <h3 className='heading' >Get to know Mac.</h3>
        <Carousel className='px-4 md:px-10'>
          <CarouselContent className='w-full flex gap-10'>
            {cardData.map((item, index) => (
              <CarouselItem
                className={`relative basis-3/4 md:basis-1/3 cursor-grab ${index == 3 ? "text-zinc-100" : "text-zinc-950"} flex-shrink-0 h-[36rem] md:h-[48rem] overflow-hidden p-5 rounded-3xl`}
                key={index}
              >
                <h2 className={`leading-none text-xs md:text-sm py-1 !px-2 ${index == 3 ? "text-zinc-950 bg-zinc-50" : "bg-zinc-950 text-zinc-50"} rounded-full w-fit`} >{item.title}</h2>
                <p className='title' >{item.description}</p>
                <Image src={item.img} alt='' fill className='z-[-1] w-full h-full absolute left-0 bottom-0 object-cover' />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <Lineup />
    </main >
  );
};

export default Page;
