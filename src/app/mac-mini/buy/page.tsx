"use client";

import { Button } from "@/components/ui/button";
import SubNav from "@/components/ui/subNav";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Page = () => {
    const navLinks = [
        { label: "Overview", href: "/mac-mini#overview" },
        { label: "Tech specs", href: "/mac-mini#tech-specs" },
        { label: "Compare", href: "/mac-mini#compare" },
    ];

    const miniSpecs = [
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
    ];

    // Initialize selectedSpecs based on the first option's label of each category in miniSpecs
    const initialSpecs = miniSpecs.reduce((acc, spec) => {
        acc[spec.title.toLowerCase()] = spec.options[0].label;
        return acc;
    }, {} as Record<string, string>);

    const [selectedSpecs, setSelectedSpecs] = useState(initialSpecs);
    const [totalPrice, setTotalPrice] = useState(799); // Start with default price of $799

    useEffect(() => {
        const additionalPrice = miniSpecs.reduce((sum, specCategory) => {
            const selectedOption = specCategory.options.find(
                option => option.label === selectedSpecs[specCategory.title.toLowerCase() as keyof typeof selectedSpecs]
            );
            return sum + (selectedOption?.price || 0);
        }, 0);

        setTotalPrice(799 + additionalPrice); // Add default price to the sum of selected options
    }, [selectedSpecs]);

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

    return (
        <main>
            <SubNav title="Mac mini" navLinks={navLinks} />
            <section className="pb-10 pt-40 px-section flex flex-col md:flex-row">
                <motion.div
                    className="left md:w-1/2 h-40 pb-20 relative md:sticky md:top-[10vh]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                // style={{ position: 'sticky', top: '10vh' }}
                >
                    <Image src={"/store-mini.png"} width={500} height={100} alt="" className="object-contain w-fit h-fit center !top-0" />
                    <Button size={"sm"} variant={"secondary"} className="center mt-12 md:!mt-44">+view gallery</Button>
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
                                            checked={selectedSpecs[specCategory.title.toLowerCase() as keyof typeof selectedSpecs] === option.label}
                                            onChange={() => handleSpecChange(specCategory.title.toLowerCase() as keyof typeof selectedSpecs, option.label)}
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
            <section className="btm flex justify-between w-full fixed bottom-0 left-1/2 bg-muted -translate-x-1/2  px-section py-5 border-t border-muted">
                <div className="flex flex-col">
                    <h3 className="subtitle">Delivery:</h3>
                    <p className="desc" >In Stock<br />Free Shipping</p>
                </div>
                <Button size={"default"} variant="default">
                    Proceed to checkout
                </Button>
                <h2 className="title">{formattedPrice}</h2>
            </section>
        </main>
    );
};

export default Page;
