"use client";

import { Button } from "@/components/ui/button";
import SubNav from "@/components/ui/subNav";
import Image from "next/image";
import React, { useState } from "react";

const Page = () => {
    const navLinks = [
        { label: "Overview", href: "/mac-mini#overview" },
        { label: "Tech specs", href: "/mac-mini#tech-specs" },
        { label: "Compare", href: "/mac-mini#compare" },
    ];

    const defaultSpecs = {
        processor: "M2 Pro with 10‑core CPU",
        memory: "32GB unified memory",
        storage: "512GB SSD storage",
        ethernet: "Gigabit Ethernet",
        ports: "Four Thunderbolt 4 ports, HDMI port, two USB‑A ports, headphone jack",
    };

    const miniSpecs = [
        {
            title:"Processor",
            options: ["2.6GHz 10-core Intel Core i9", "16GB LPDDR5X 3200MHz memory", "512GB PCIe NVMe SSD"]
        },
        {
            title: "Memory",
            options: ["16GB LPDDR5X 3200MHz memory", "32GB LPDDR5X 3200MHz memory", "64GB LPDDR5X 3200MHz memory"]
        },
        {
            title: "Storage",
            options: ["512GB SSD storage", "1TB SSD storage", "2TB SSD storage"]
        }
    ]

    const [selectedSpecs, setSelectedSpecs] = useState(defaultSpecs);

    const handleSpecChange = (category: keyof typeof defaultSpecs, value: string) => {
        setSelectedSpecs(prevSpecs => ({
            ...prevSpecs,
            [category]: value,
        }));
    };

    return (
        <main>
            <SubNav title="Mac mini" navLinks={navLinks} />
            <section className="h-dvh pt-40 px-section flex flex-col md:flex-row">
                <div className="left md:w-1/2 h-32 pb-20 relative">
                    <Image src={"/store-mini.png"} width={500} height={100} alt="" className="object-contain w-fit h-fit center !top-0" />
                </div>
                <div className="right md:w-1/2 flex flex-col gap-5">
                    <h1 className="heading">Customize your Mac mini</h1>
                    <p className="desc -mt-5">
                        Experience the future of your home office with our Mac mini customization service. Choose from over 5,000 options to create a customized Mac mini that suits your needs and preferences.
                    </p>
                    <div className="flex gap-2 flex-wrap">
                        {Object.values(selectedSpecs).map((spec, index) => (
                            <Button key={index} size="sm" disabled variant="secondary">
                                {spec}
                            </Button>
                        ))}
                    </div>
                    <div className="w-full h-[1px] bg-muted" />
                    <div>
                        <h3 className="subtitle mb-3">Processor</h3>
                        <div className="flex gap-2 flex-wrap">
                            <label className="labelOption">
                                <input
                                    type="radio"
                                    className="form-radio hidden"
                                    checked={selectedSpecs.processor === "M2 Pro with 10‑core CPU"}
                                    onChange={() => handleSpecChange("processor", "M2 Pro with 10‑core CPU")}
                                />
                                <span className="subtitle">M2 Pro with 10‑core CPU</span>
                            </label>
                            <label className="labelOption">
                                <input
                                    type="radio"
                                    className="form-radio hidden"
                                    checked={selectedSpecs.processor === "M2 Max with 12‑core CPU"}
                                    onChange={() => handleSpecChange("processor", "M2 Max with 12‑core CPU")}
                                />
                                <span className="subtitle">M2 Max with 12‑core CPU</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h3 className="subtitle mb-3">Memory</h3>
                        <div className="flex gap-2 flex-wrap">
                            <label className="labelOption">
                                <input
                                    type="radio"
                                    className="form-radio hidden"
                                    checked={selectedSpecs.memory === "32GB unified memory"}
                                    onChange={() => handleSpecChange("memory", "32GB unified memory")}
                                />
                                <span className="subtitle">32GB unified memory</span>
                            </label>
                            <label className="labelOption">
                                <input
                                    type="radio"
                                    className="form-radio hidden"
                                    checked={selectedSpecs.memory === "64GB unified memory"}
                                    onChange={() => handleSpecChange("memory", "64GB unified memory")}
                                />
                                <span className="subtitle">64GB unified memory</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h3 className="subtitle mb-3">Storage</h3>
                        <div className="flex gap-2 flex-wrap">
                            <label className="labelOption">
                                <input
                                    type="radio"
                                    className="form-radio hidden"
                                    checked={selectedSpecs.storage === "512GB SSD storage"}
                                    onChange={() => handleSpecChange("storage", "512GB SSD storage")}
                                />
                                <span className="subtitle">512GB SSD storage</span>
                            </label>
                            <label className="labelOption">
                                <input
                                    type="radio"
                                    className="form-radio hidden"
                                    checked={selectedSpecs.storage === "1TB SSD storage"}
                                    onChange={() => handleSpecChange("storage", "1TB SSD storage")}
                                />
                                <span className="subtitle">1TB SSD storage</span>
                            </label>
                        </div>
                    </div>

                    {/* Add similar sections for Ethernet, Ports, etc. */}
                </div>
            </section>
        </main>
    );
};

export default Page;
