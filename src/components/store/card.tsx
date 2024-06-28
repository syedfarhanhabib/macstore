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
import Link from 'next/link';


interface cardProps {
    title: string;
    link: string;
    price: string;
    img: string;
    btn: string;
    className?: string;
}

const Card = ({ title, price, img, btn, link }: cardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [tab, setTab] = useState(false);
    return (
        <>
            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='relative overflow-hidden shadow-lg group hover:scale-[1.01] duration-200 p-5 w-96 h-96 flex flex-col justify-between rounded-3xl bg-muted'
            >
                <h4 className='title'>{title}</h4>
                <Image src={img} alt={title} width={200} height={200} className='w-[80%] center object-contain' />
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0, }}
                    transition={{ duration: 0.3 }}
                    className='z-20 center' >
                    <DialogTrigger
                        onClick={() => setTab(false)}
                        className='-translate-x-1/2 -translate-y-1/2 bg-accent text-primary-foreground shadow hover:opacity-85 hover:scale-105 active:scale-95 px-4 py-2  rounded-full' >Learn more</DialogTrigger>
                </motion.div>
                <div className="flex items-end justify-between">
                    <p className='desc px-0'>from <span className='subtitle font-medium' >{price}</span></p>
                    <Link href={link} ><Button className=''>{btn}</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Card