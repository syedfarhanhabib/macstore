import { title } from "process";
import { BiCamera } from "react-icons/bi";
import React from "react";

export const cardData = [
    {
        title: "Getting started",
        description: "Easy to use. Easy to love.",
        img: "/hello.jpg"
    },
    {
        title: "Mac & Phone",
        description: "Dream team.",
        img: "/team.jpg"
    },
    {
        title: "Durability",
        description: "Built to stand the test of time.",
        img: "/durability.jpg"
    },
    {
        title: "Privacy and Security",
        description: "Your business is nobody else’s.",
        img: "/security.jpg"
    },
];
export const tabsData = [
    "Laptops",
    "Desktops",
    "Displays",
];

// export const lineupData = [
//     {
//         name: "MacBook Air 13” and 15”",
//         processor: "M2 or M3 chip",
//         description: "Strikingly thin and fast so you can work, play, or create anywhere.",
//         img: "/hello.jpg"
//     }, {
//         name: "MacBook Air 13” and 15”",
//         processor: "M2 or M3 chip",
//         description: "Strikingly thin and fast so you can work, play, or create anywhere.",
//         img: "/hello.jpg"
//     }, {
//         name: "MacBook Air 13” and 15”",
//         processor: "M2 or M3 chip",
//         description: "Strikingly thin and fast so you can work, play, or create anywhere.",
//         img: "/hello.jpg"
//     },
// ];


export const lineupData = [
    {
        "title": "Laptops",
        "data": [
            {
                name: "MacBook Air 13” and 15”",
                processor: "M2 or M3 chip",
                description: "Strikingly thin and fast so you can work, play, or create anywhere.",
                img: "/laptop.png",
                screen: "13.6” or 15.3”",
                screenDesc: "Liquid Retina display with 500 nits of brightness and support for 1 billion colors",
                processorImg: "/m2m3.png",
                battery: "18 hours",
                ports: "4 ports",
                portsDesc: "2x Thunderbolt / USB 4, headphone jack, MagSafe",
                weight: "2.7 lb. or 3.3 lb.",
                resolution: "",
                resolutionDesc: "",
                brightness: "600 nits",
                brightnessDesc: "brightness for brilliant color",
                camera: "",
                cameraDesc: "",
            },
            {
                name: "MacBook Pro 14” and 16”",
                processor: "M3, M3 Pro, or M3 Max chip",
                description: "The most advanced Mac laptops for demanding workflows.",
                img: "/laptop pro.png",
                screen: "13.6” or 15.3”",
                screenDesc: "Liquid Retina XDR display with 1000 nits of HDR and 600 nits of SDR brightness and up to 120Hz refresh rates",
                processorImg: "/m3all.png",
                battery: "22 hours",
                ports: "7 ports",
                portsDesc: "2x Thunderbolt / USB 4 or 3x Thunderbolt 4, HDMI, SDXC, headphone jack, MagSafe",
                weight: "3.4 lb. or 4.7 lb.",
                resolution: "",
                resolutionDesc: "",
                brightness: "1000 nits",
                brightnessDesc: "brightness for dazzling color; up to 1600 nits peak brightness",
                camera: "",
                cameraDesc: "",
            },
        ]
    },
    {
        "title": "Desktops",
        "data": [
            {
                name: "iMac",
                processor: "M3 chip",
                description: "A stunning all-in-one desktop for creativity and productivity.",
                img: "/iMac.png",
                screen: "24”",
                screenDesc: "4.5K Retina display with 500 nits of brightness delivers sharp and vibrant details",
                processorImg: "/m3.png",
                battery: "",
                ports: "6 ports",
                portsDesc: "2x Thunderbolt / USB 4, up to 2x USB 3, Gigabit Ethernet, headphone jack",
                weight: "",
                resolution: "",
                resolutionDesc: "",
                brightness: "",
                brightnessDesc: "",
                camera: "",
                cameraDesc: "",
            },
            {
                name: "Mac Mini",
                processor: "M2 or M2 Pro chip",
                description: "The most affordable Mac desktop with outsized performance.",
                img: "/pc mini.png",
                screen: "—",
                screenDesc: "",
                processorImg: "/m2pro.png",
                battery: "",
                ports: "9 ports",
                portsDesc: "Up to 4x Thunderbolt 4, 2x USB‑A, HDMI, Gigabit Ethernet, headphone jack",
                weight: "",
                resolution: "",
                resolutionDesc: "",
                brightness: "",
                brightnessDesc: "",
                camera: "",
                cameraDesc: "",
            },
            {
                name: "Mac Studio",
                processor: "M2 Max or M2 Ultra chip",
                description: "Powerful performance and extensive connectivity for pro workflows.",
                img: "/pc pro.png",
                screen: "—",
                screenDesc: "",
                processorImg: "/m2max.png",
                battery: "",
                ports: "12 ports",
                portsDesc: "8x Thunderbolt 4, 3x USB‑A, 2x HDMI, 2x 10Gb Ethernet, 2x Serial ATA, headphone jack",
                weight: "",
                resolution: "",
                resolutionDesc: "",
                brightness: "",
                brightnessDesc: "",
                camera: "",
                cameraDesc: "",
            },
            {
                name: "Mac Pro",
                processor: "M2 Ultra chip",
                description: "A pro workstation with PCIe expansion for demanding workflows.",
                img: "/mac pro.png",
                screen: "—",
                screenDesc: "",
                processorImg: "/m2max.png",
                battery: "",
                ports: "18 ports",
                portsDesc: "Up to 6x Thunderbolt 4, 2x USB‑A, up to 2x USB‑C, HDMI, 10Gb Ethernet, SDXC, headphone jack",
                weight: "",
                resolution: "",
                resolutionDesc: "",
                brightness: "",
                brightnessDesc: "",
                camera: "",
                cameraDesc: "",
            },
        ]
    },
    {
        "title": "Displays",
        "data": [
            {
                name: "Studio Display",
                processor: "",
                description: "A 5K Retina display with stellar camera and audio.",
                img: "/display.png",
                screen: "27”",
                screenDesc: "Retina display with 5120 by 2880 pixels",
                processorImg: "/m2m3.png",
                battery: "",
                ports: "4 ports",
                portsDesc: "Thunderbolt 3 (USB‑C), 3x USB‑C",
                weight: "",
                resolution: "5k",
                resolutionDesc: "Retina display for gorgeous color and spectacular detail",
                brightness: "600 nits",
                brightnessDesc: "brightness for brilliant color",
                camera: React.createElement(BiCamera),
                cameraDesc: "12MP Ultra Wide camera with Center Stage for more natural video calls",
            },
            {
                name: "Pro Display XDR",
                processor: "",
                description: "An advanced 6K XDR display for pro workflows.",
                img: "/prodisplay.png",
                screen: "32”",
                screenDesc: "Retina XDR display with 6016 by 3384 pixels",
                processorImg: "/m2m3.png",
                battery: "",
                ports: "4 ports",
                portsDesc: "Thunderbolt 3 (USB‑C), 3x USB‑C",
                weight: "",
                resolution: "6k",
                resolutionDesc: "Retina XDR display for gorgeous color and spectacular detail",
                brightness: "1000 nits",
                brightnessDesc: "brightness for dazzling color; up to 1600 nits peak brightness",
                camera: "—",
                cameraDesc: "",
            },
        ]
    },
]
