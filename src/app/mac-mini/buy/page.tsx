"use client";

import { Button } from "@/components/ui/button";
import SubNav from "@/components/ui/subNav";
import Image from "next/image";
import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ThemeSwitch from "@/components/ui/theme";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

type Option = {
    label: string;
    price?: number; // optional property
};

type Spec = {
    title: string;
    options: Option[];
};

type SpecsTypes = Spec[];

const Page = () => {
    const router = useRouter(); // Initialize useRouter

    const navLinks = [
        { label: "Overview", href: "/mac-mini#overview" },
        { label: "Tech specs", href: "/mac-mini#tech-specs" },
        { label: "Compare", href: "/mac-mini#compare" },
    ];

    const miniSpecs: SpecsTypes = useMemo(() => [
        {
            title: "Processor",
            options: [
                { label: "M2 Pro with 10‑core CPU" },
                { label: "M2 Max with 12‑core CPU", price: 250 }
            ]
        },
        {
            title: "Memory",
            options: [
                { label: "32GB unified memory" },
                { label: "64GB unified memory", price: 150 },
                { label: "128GB unified memory", price: 200 }
            ]
        },
        {
            title: "Storage",
            options: [
                { label: "512GB SSD storage" },
                { label: "1TB SSD storage", price: 75 },
                { label: "2TB SSD storage", price: 100 }
            ]
        }
    ], []); // Empty dependency array means this will only be created once

    // Initialize selectedSpecs based on the first option's label of each category in miniSpecs
    const initialSpecs = miniSpecs.reduce((acc, item) => {
        acc[item.title] = item.options[0].label;
        return acc;
    }, {} as Record<string, string>);

    const [selectedSpecs, setSelectedSpecs] = useState(initialSpecs);
    const [totalPrice, setTotalPrice] = useState(799); // Start with default price of $799

    useEffect(() => {
        const additionalPrice = miniSpecs.reduce((acc, item) => {
            const selectedOption = item.options.find(
                option => option.label === selectedSpecs[item.title as keyof typeof selectedSpecs]
            );
            return acc + (selectedOption?.price || 0);
        }, 0);

        setTotalPrice(799 + additionalPrice); // Add default price to the sum of selected options
    }, [selectedSpecs, miniSpecs]);

    const handleSpecChange = (category: keyof typeof initialSpecs, value: string) => {
        setSelectedSpecs(prevSpecs => ({
            ...prevSpecs,
            [category]: value,
        }));
    };

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(totalPrice);

    const handleCheckout = () => {
        // Store selected specs and total price in local storage
        localStorage.setItem('selectedSpecs', JSON.stringify(selectedSpecs));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));

        // Navigate to the checkout page
        router.push('/mac-mini/buy/checkout');
    };

    return (
        <main>
            <ThemeSwitch defaultTheme="light" />
            <SubNav title="Mac mini" navLinks={navLinks} />
            <section className="pb-10 pt-40 px-section flex flex-col md:flex-row">
                <motion.div
                    className="left md:w-1/2 h-40 pb-20 relative md:sticky md:top-[10vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={"/store-mini.png"} width={500} height={100} alt="" className="object-contain w-fit h-fit center !top-0" />
                    <Dialog>
                        <DialogTrigger className="center mt-12 md:!mt-44 h-6 rounded-full px-3 py-1 text-xs bg-secondary text-secondary-foreground shadow-sm hover:bg-opacity-85 hover:scale-105 w-fit active:scale-95 font-medium tracking-tighter" >
                            +view gallery
                        </DialogTrigger>
                        <DialogContent className="overflow-hidden w-[90vw] h-[70vh]" >
                            <Carousel>
                                <CarouselContent className="w-[90vw] h-[70vh]" >
                                    <CarouselItem className="!pl-0"><Image src={"/store-mini.png"} width={500} height={100} alt="" className="" /></CarouselItem>
                                    <CarouselItem className="!pl-0"><Image src={"/store-mini.png"} width={500} height={100} alt="" className="" /></CarouselItem>
                                    <CarouselItem className="!pl-0"><Image src={"/store-mini.png"} width={500} height={100} alt="" className="" /></CarouselItem>
                                </CarouselContent>
                                <div className="flex items-center absolute left-1/2 -translate-x-1/2 !bottom-10  w-fit h-4 z-10">
                                    <CarouselNext />
                                    <CarouselPrevious />
                                </div>
                            </Carousel>
                        </DialogContent>
                    </Dialog>
                </motion.div>
                <div className="right md:w-1/2 pb-24 flex flex-col gap-10">
                    <h1 className="heading">Customize your Mac mini</h1>
                    <p className="desc -mt-5">
                        Experience the future of your home office with our Mac mini customization service. Choose from over 5,000 options to create a customized Mac mini that suits your needs and preferences.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {Object.values(selectedSpecs).map((spec, index) => (
                            <Button key={index} size="sm" disabled variant="outline">
                                {spec}
                            </Button>
                        ))}
                    </div>
                    <div className="w-full h-[1px] bg-muted"></div>
                    {miniSpecs.map((specCategory, index) => (
                        <div className="" key={index}>
                            <h3 className="desc mb-3">{specCategory.title}</h3>
                            <div className="flex gap-2 flex-wrap">
                                {specCategory.options.map((option, subIndex) => (
                                    <label className="labelOption" key={subIndex}>
                                        <input
                                            type="radio"
                                            className="form-radio hidden"
                                            checked={selectedSpecs[specCategory.title as keyof typeof selectedSpecs] === option.label}
                                            onChange={() => handleSpecChange(specCategory.title as keyof typeof selectedSpecs, option.label)}
                                        />
                                        <span className="subtitle">{option.label}</span>
                                        {option.price && (
                                            <span className="desc">+${option.price}</span>
                                        )}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="btm flex justify-between rounded-xl w-3/4 md:w-1/2 fixed bottom-3  bg-muted/30 backdrop-blur-3xl left-1/2 -translate-x-1/2  px-section py-5 border-[1px] border-muted">
                <div className="">
                    <span className="desc" >Total price</span>
                    <h2 className="subtitle md:title" >{formattedPrice}</h2>
                </div>
                <Button size={"default"} variant="default" onClick={handleCheckout}>
                    Proceed to checkout
                </Button>
            </section>
        </main>
    );
};

export default Page;
