'use client';
import Image from 'next/image';
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from '../ui/button';
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Card from './card';
import { storeCard } from '@/lib/data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const CardInfo = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnMouseEnter: true, })
    )
    return (
        <>
            {storeCard.map((item, index) => (
                <React.Fragment key={index} >
                    <Dialog>
                        <DialogContent className='h-[80vh] w-[80vw] overflow-y-scroll max-w-[90vw] max-h-[90vh]' >
                            <Tabs>
                                <TabsList className='mb-5 max-w-[75vw] center !top-5 !-translate-y-0' >
                                    <TabsTrigger value={item.title}>{item.title}</TabsTrigger>
                                    {/* <TabsTrigger value="Macbook Air">Macbook Air</TabsTrigger>
                                    <TabsTrigger value="Macbook Pro">Macbook Pro</TabsTrigger>
                                    <TabsTrigger value="iMac">iMac</TabsTrigger>
                                    <TabsTrigger value="Mac mini">Mac mini</TabsTrigger>
                                    <TabsTrigger value="Mac studio">Mac studio</TabsTrigger>
                                    <TabsTrigger value="Mac Pro">Mac Pro</TabsTrigger>
                                    <TabsTrigger value="Studio display">Studio display</TabsTrigger>
                                    <TabsTrigger value="Pro display">Pro display</TabsTrigger> */}
                                </TabsList>
                                <TabsContent value={item.title} className='w-full  rounded-5xl pt-16 flex flex-col md:flex-row gap-10' >
                                    <div className="w-full flex flex-col md:flex-row gap-5 md:gap-20 justify-between">
                                        <div className="relative left w-full md:w-1/3">
                                            <Carousel plugins={[plugin.current]}
                                                className="w-full max-w-xs overflow-x-hidden"
                                                onMouseEnter={plugin.current.stop}
                                                onMouseLeave={plugin.current.reset}
                                            >
                                                <CarouselContent >
                                                    {Array.from({ length: 5 }).map((_, subIndex) => {
                                                        let src;
                                                        if (subIndex % 3 === 0) {
                                                            src = `${item.data.image1}`;
                                                        }
                                                        else if (subIndex % 3 === 1) {
                                                            src = `${item.data.image2}`;
                                                        }
                                                        else {
                                                            src = `${item.data.image3}`;
                                                        }
                                                        return (
                                                            <CarouselItem key={subIndex}>
                                                                <Image src={src} width={300} height={300} alt={item.data.name} className='rounded-lg' />
                                                            </CarouselItem>
                                                        )
                                                    })}
                                                </CarouselContent>
                                                <div className="flex items-center  center translate-y-20  w-fit h-4 z-10">
                                                    <CarouselNext />
                                                    <CarouselPrevious />
                                                </div>
                                            </Carousel>
                                        </div>
                                        <div className="right md:w-2/3 flex flex-col">
                                            <h3 className='title pb-2' >{item.data.name}</h3>
                                            <div className="price-buy flex justify-between">
                                                <h4 className='price desc' >from <span className='text-2xl' >{item.data.price}</span></h4>
                                                <Button variant={"default"} className='bg-accent text-background' >Buy</Button>
                                            </div>
                                            <div className="dialogContent">
                                                <div className="left w-1/12">
                                                    <Image src={item.data.img1} width={400} height={400} alt={item.data.desc1} className='object-contain w-12' />
                                                </div>
                                                <div className='w-[2px] h-full dark:bg-muted bg-muted-foreground' />
                                                <div className="right w-11/12">
                                                    <p className='desc'>{item.data.desc1}</p>
                                                </div>
                                            </div>
                                            <div className="dialogContent">
                                                <div className="left w-1/12">
                                                    <i className='text-2xl md:text-5xl' >{item.data.img2}</i>
                                                </div>
                                                <div className='w-[1px] h-full dark:bg-muted bg-muted-foreground' />
                                                <div className="right w-11/12">
                                                    <p className='desc'>{item.data.desc2}</p>
                                                </div>
                                            </div>
                                            <div className="dialogContent">
                                                <div className="left w-1/12">
                                                    <i className='text-2xl md:text-5xl' >{item.data.img3}</i>
                                                </div>
                                                <div className='w-[1px] h-full dark:bg-muted bg-muted-foreground' />
                                                <div className="right w-11/12">
                                                    <p className='desc'>{item.data.desc3}</p>
                                                </div>
                                            </div>
                                            <div className="dialogContent">
                                                <div className="left w-1/12">
                                                    <i className='text-2xl md:text-5xl' >{item.data.img4}</i>
                                                </div>
                                                <div className='w-[1px] h-full dark:bg-muted bg-muted-foreground' />
                                                <div className="right w-11/12">
                                                    <p className='desc'>{item.data.desc4}</p>
                                                </div>
                                            </div>
                                            <div className="dialogContent">
                                                <div className="left w-1/12">
                                                    <i className='text-2xl md:text-5xl' >{item.data.img5}</i>
                                                </div>
                                                <div className='w-[1px] h-full dark:bg-muted bg-muted-foreground' />
                                                <div className="right w-11/12">
                                                    <p className='desc'>{item.data.desc5}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </DialogContent>
                        <CarouselItem className='w-fit basis-100' >
                            <Card className='' title={item.data.name} price={item.data.price} img={item.data.image1} btn={"Buy"} link={item.data.link} />
                        </CarouselItem>
                    </Dialog>
                </React.Fragment >
            ))}
        </>
    )
}

export default CardInfo