'use client';
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import Card from './card';
import { storeCard } from '@/lib/data';
import { CarouselItem } from '../ui/carousel';

const CardInfo = () => {
    return (
        <>
            {storeCard.map((item, index) => (
                <React.Fragment key={index} >
                    <Dialog>
                        <CarouselItem className='w-fit basis-100' >
                            {item.data?.map((dataItem, dataIndex) => (
                                <React.Fragment key={dataIndex} >
                                    <Card className='' title={dataItem.name} price={dataItem.price} img={dataItem.img} btn={"Buy"} link={dataItem.link} />
                                </React.Fragment>
                            ))}
                        </CarouselItem>

                        <DialogContent className='h-[80vh] w-[80vw] max-w-[90vw] max-h-[90vh] flex flex-col md:flex-row justify-between gap-5' >
                            <Tabs>
                                <TabsList defaultValue={item.title} className='mb-5 max-w-[75vw] center !top-5 !-translate-y-0' >
                                    <TabsTrigger value="Macbook Air">Macbook Air</TabsTrigger>
                                    <TabsTrigger value="Macbook Pro">Macbook Pro</TabsTrigger>
                                    <TabsTrigger value="iMac">iMac</TabsTrigger>
                                    <TabsTrigger value="Mac mini">Mac mini</TabsTrigger>
                                    <TabsTrigger value="Mac studio">Mac studio</TabsTrigger>
                                    <TabsTrigger value="Mac Pro">Mac Pro</TabsTrigger>
                                    <TabsTrigger value="Studio display">Studio display</TabsTrigger>
                                    <TabsTrigger value="Pro display">Pro display</TabsTrigger>
                                </TabsList>
                                <TabsContent value={"Macbook Air"} className='w-full rounded-3xl pt-16 flex flex-col md:flex-row gap-10' >
                                    {item.data?.map((dataItem, dataIndex) => (
                                        <React.Fragment key={dataIndex} >
                                            <div className="w-full">
                                                <div className="left w-1/3">
                                                    <Image src={dataItem.img} width={300} height={300} alt={dataItem.name} />
                                                </div>
                                                <div className="right w-2/3"></div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                </TabsContent>
                            </Tabs>
                        </DialogContent>
                    </Dialog>
                </React.Fragment >
            ))}
        </>
    )
}

export default CardInfo