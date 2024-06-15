'use client';

import Categories from '@/components/hero/categories';
import { Spotlight } from '@/components/hero/spotlight';
import { cardData, lineupData, tabsData } from '@/lib/data';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi';



const Page: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["100% 100%", "80% 80%"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="overflow-hidden">
      <section ref={heroRef} className="hero w-full min-h-dvh pt-36 px-10 flex flex-col gap-5">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="fill-primary"
        />
        <figure className="tracking-tighter leading-none pb-5 font-medium flex flex-col md:flex-row justify-between w-full">
          <h1 className="text-7xl bg-gradient-to-br from-muted-foreground to-primary bg-clip-text text-transparent">
            If you can dream it,
            <br />
            Mac can do it.
          </h1><h3 className="text-3xl">Mac</h3>
        </figure>
        <motion.video
          style={{ scaleX, opacity: scrollYProgress, scaleY: scrollYProgress, transition: "all ease .2s" }}
          src="/machero.mp4"
          className="w-full rounded-3xl object-cover"
          autoPlay
          muted
          loop
        />
      </section>
      <Categories />
      <section className='carousel' >
        <h3 className='text-7xl font-medium tracking-tighter px-10 pb-5' >Get to know Mac.</h3>
        <Carousel>
          <CarouselContent className='w-full flex gap-10 pl-14' >
            {cardData.map((item, index) => (
              <CarouselItem
                className={`relative basis-3/4 md:basis-1/3 cursor-grab ${index == 3 ? "text-zinc-100" : "text-zinc-950"} h-dvh flex-shrink-0 overflow-hidden p-5 rounded-3xl`}
                key={index}
              >
                <h2>{item.title}</h2>
                <p className='text-4xl font-medium' >{item.description}</p>
                <Image src={item.img} alt='' fill className='z-[-1] w-full h-full absolute left-0 bottom-0 object-cover' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section className='lineup min-h-dvh pt-20 px-10 pb-10' >
        <h3 className='text-7xl font-medium tracking-tighter pb-5' >Explore the lineup.</h3>
        <Tabs defaultValue="Laptops" className="w-full">
          <TabsList className='mb-5 text-3xl' >
            <TabsTrigger value="Laptops">Laptops</TabsTrigger>
            <TabsTrigger value="Desktops">Desktops</TabsTrigger>
            <TabsTrigger value="Displays">Displays</TabsTrigger>
          </TabsList>
          {lineupData.map((category, indexValue) => (
            <TabsContent key={indexValue} value={category.title} className='rounded-3xl flex flex-col md:flex-row gap-10' >
              {category.data.map((item, index) => (
                <React.Fragment key={index}>
                  <div className='relative rounded-3xl bg-muted py-5 px-5 items-center justify-center flex flex-col gap-5 text-center w-full md:w-1/3 h-fit shadow-lg'>
                    <Image src={item.img} alt={item.name} width={900} height={900} className=' w-full object-contain h-72' />
                    <div className='flex flex-col gap-1 items-center'>
                      <h3 className='title' >{item.name}</h3>
                      <p className='subtitle' >{item.processor}</p>
                    </div>
                    <p className='desc px-3' >{item.description}</p>
                    <div className="buttons flex items-center gap-5">
                      <Button variant={"default"} className='bg-blue-500' >Learn more</Button>
                      <Button variant={"link"} >Buy now <BiRightArrowAlt /> </Button>
                    </div>
                    <div className='w-full h-fit border-t border-muted-foreground/60 pt-10 mt-5 flex flex-col gap-10' >
                      <div className='flex flex-col gap-1 items-center' >
                        <h3 className='title' >{item.screen}</h3>
                        <p className='desc px-3' >{item.screenDesc}</p>
                      </div>
                      {indexValue! == 0 && <div className='flex flex-col gap-1 items-center'>
                        <Image src={item.processorImg} alt={item.processor} width={100} height={100} className='mx-auto h-14 object-contain' />
                        <p className='desc' >{item.processor}</p>
                      </div>}
                      {indexValue! == 1 && <div className='flex flex-col gap-1 items-center'>
                        <Image src={item.processorImg} alt={item.processor} width={100} height={100} className='mx-auto h-10 object-contain' />
                        <p className='desc' >{item.processor}</p>
                      </div>}
                      {indexValue! == 0 && <div className='flex flex-col gap-1 items-center'>
                        <p className='desc'>up to</p>
                        <h3 className='title' >{item.battery}</h3>
                        <p className="desc">battery life</p>
                      </div>}
                      <div className="ports flex flex-col gap-1 items-center">
                        <h3 className='title' >{item.ports}</h3>
                        <p className="desc">{item.portsDesc}</p>
                      </div>
                      {indexValue! == 2 && <div className="camera flex flex-col gap-1 items-center">
                        <h3 className='title' >{item.camera}</h3>
                        <p className="desc">{item.cameraDesc}</p>
                      </div>}
                      {indexValue! == 0 && <div className="weight flex flex-col gap-1 items-center">
                        <h3 className='title' >{item.weight}</h3>
                        <p className="desc">weight</p>
                      </div>}
                    </div>
                  </div>
                </React.Fragment>

              ))}
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main >
  );
};

export default Page;
