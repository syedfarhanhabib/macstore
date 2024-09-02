"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [selectedSpecs, setSelectedSpecs] = useState<Record<string, string>>({});
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        // Retrieve the selected specs and total price from local storage
        const specs = localStorage.getItem("selectedSpecs");
        const price = localStorage.getItem("totalPrice");

        if (specs && price) {
            setSelectedSpecs(JSON.parse(specs));
            setTotalPrice(JSON.parse(price));
        }
    }, []);

    return (
        <main className="px-section pt-20">
            <h1 className="heading">Checkout</h1>
            <div className="mb-6">
                <h3 className="title mb-5">Your Selected Specifications</h3>
                <ul className="desc">
                    {Object.entries(selectedSpecs).map(([key, value]) => (
                        <li key={key} className="py-2" >
                            <strong>{key}:</strong> {value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-6">
                <h2 className="desc">Total Price:</h2>
                <p className="title" >${totalPrice}</p>
            </div>
            <Button>
                Complete Purchase
            </Button>
        </main>
    );
};

export default Page;
