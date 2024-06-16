import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button';
import { BiRightArrowAlt } from 'react-icons/bi';
import { lineupData } from '@/lib/data';
import Image from 'next/image';

const Lineup = () => {
    return (
        <section className='lineup relative min-h-dvh pt-20 px-4 md:px-10 pb-10' >
            <h3 className='heading' >Explore the lineup.</h3>
            <Tabs defaultValue="Laptops" className="w-full">
                <TabsList className='mb-5 text-3xl' >
                    <TabsTrigger value="Laptops">Laptops</TabsTrigger>
                    <TabsTrigger value="Desktops">Desktops</TabsTrigger>
                    <TabsTrigger value="Displays">Displays</TabsTrigger>
                </TabsList>
                {lineupData.map((category, indexValue) => (
                    <TabsContent key={indexValue} value={category.title} className='rounded-3xl flex flex-col md:flex-row gap-10' >
                        <Carousel>
                            <CarouselContent className='ml-[2px] flex gap-10 basis-4/5'>
                                {category.data.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <div className='relative flex-shrink-0 rounded-3xl md:bg-muted/0 p-5 md:items-center justify-cente flex flex-col gap-5 md:text-center w-5/6 md:w-1/3 h-fit shadow-lg'>
                                            <Image src={item.img} alt={item.name} width={900} height={900} className=' w-full object-contain h-32 md:h-40' />
                                            <div className='lineupSection'>
                                                <h3 className='title' >{item.name}</h3>
                                                <p className='subtitle' >{item.processor}</p>
                                            </div>
                                            <p className='desc' >{item.description}</p>
                                            <div className="buttons flex items-center gap-5">
                                                <Button variant={"default"} className='bg-blue-500' >Learn more</Button>
                                                <Button variant={"link"} >Buy now <BiRightArrowAlt /> </Button>
                                            </div>
                                            <div className='w-full h-fit border-t border-muted-foreground/60 pt-10 mt-5 flex flex-col gap-10' >
                                                <div className='lineupSection' >
                                                    <h3 className='title' >{item.screen}</h3>
                                                    <p className='desc' >{item.screenDesc}</p>
                                                </div>
                                                {indexValue! == 0 && <div className='lineupSection'>
                                                    <Image src={item.processorImg} alt={item.processor} width={100} height={100} className='md:mx-auto h-14 object-contain' />
                                                    <p className='desc' >{item.processor}</p>
                                                </div>}
                                                {indexValue! == 1 && <div className='lineupSection'>
                                                    <Image src={item.processorImg} alt={item.processor} width={100} height={100} className='mx-auto h-10 object-contain' />
                                                    <p className='desc' >{item.processor}</p>
                                                </div>}
                                                {indexValue! == 0 && <div className='lineupSection'>
                                                    <p className='desc'>up to</p>
                                                    <h3 className='title' >{item.battery}</h3>
                                                    <p className="desc">battery life</p>
                                                </div>}
                                                <div className="ports lineupSection">
                                                    <h3 className='title' >{item.ports}</h3>
                                                    <p className="desc">{item.portsDesc}</p>
                                                </div>
                                                {indexValue! == 2 && <div className="camera lineupSection">
                                                    <h3 className='title' >{item.camera}</h3>
                                                    <p className="desc">{item.cameraDesc}</p>
                                                </div>}
                                                {indexValue! == 0 && <div className="weight lineupSection">
                                                    <h3 className='title' >{item.weight}</h3>
                                                    <p className="desc">weight</p>
                                                </div>}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))}
                            </CarouselContent>
                            <div className="flex items-center absolute right-10 w-fit md:right-10 -top-[2.9rem]">
                                <CarouselNext />
                                <CarouselPrevious />
                            </div>
                        </Carousel>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    )
}

export default Lineup