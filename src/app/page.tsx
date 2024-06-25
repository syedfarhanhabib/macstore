'use client';
import Categories from '@/components/hero/categories';
import { Spotlight } from '@/components/hero/spotlight';
import { cardData, essentialsCard } from '@/lib/data';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Lineup from '@/components/hero/lineup';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <section className="hero w-full min-h-dvh pt-36 px-4 md:px-10 flex flex-col gap-5">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="fill-accent"
        />
        <figure className="tracking-tighter leading-none pb-5 font-medium flex flex-col md:flex-row justify-between w-full">
          <h1 className="heading gradientText">
            Mac
          </h1>
          <h3 className="heading">  If you can dream it,
            <br />
            Mac can do it.</h3>
        </figure>
        <video
          src="/machero.mp4"
          className="w-full h-[75vh] rounded-3xl object-cover"
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
                <h2 className={`leading-none text-xs md:text-sm !py-2 !px-3 ${index == 3 ? "text-zinc-950 bg-zinc-50" : "bg-zinc-950 text-zinc-50"} rounded-full w-fit`} >{item.title}</h2>
                <p className={`title ${index == 3 ? "text-zinc-50" : " text-zinc-950"}`} >{item.description}</p>
                <Image src={item.img} alt='' fill className='z-[-1] w-full h-full absolute left-0 bottom-0 object-cover' />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <Lineup />
      <section className="accessories min-h-dvh px-10 py-20">
        <h3 className="heading gradientText">Essentials.</h3>
        <Carousel className='px-3 md:px-5'>
          <CarouselContent className='w-full flex gap-10'>
            {essentialsCard.map((item, index) => (
              <CarouselItem
                className={`relative flex flex-col items-center justify-between bg-muted basis-3/4 md:basis-1/2 flex-shrink-0 h-[32rem] shadow-lg overflow-hidden p-10 rounded-3xl`}
                key={index}
              >
                <div className='flex flex-col gap-3 items-center' >
                  <h2 className={`title`} >{item.title}</h2>
                  <p className='desc text-center' >{item.desc}</p>
                  <Link href={item.link}>
                    <Button variant={"default"} className='bg-accent text-background' >Shop</Button>
                  </Link>
                </div>
                <Image src={item.img} alt='' width={600} height={600} className='z-10 w-full object-contain' />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main >
  );
};

export default Page;
