import { BiCamera, BiColor, BiDesktop, BiFullscreen } from "react-icons/bi";
import React from "react";
import { BsBatteryFull, BsFillThunderboltFill, BsFullscreen } from "react-icons/bs";
import { CgDesktop } from "react-icons/cg";
import { MdCastForEducation, MdDesignServices, MdStars } from "react-icons/md";

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
export const categories = [
    {
        title: "Mac mini",
        img: "/pc mini.svg"
    },
    {
        title: "Mac Studio",
        img: "/pc pro.svg"
    },
    {
        title: "Mac pro",
        img: "/pc.svg"
    },
    {
        title: "Macbook Air",
        img: "/accessories.svg"
    },
    {
        title: "Macbook Pro",
        img: "/laptop pro.svg"
    },
    {
        title: "iMac",
        img: "/computer.svg"
    },
    {
        title: "Studio Display",
        img: "/displays.svg"
    },
];
export const storeCard = [
    {
        title: "Macbook Air",
        data:
        {
            name: "MacBook Air 13” and 15”",
            price: "$999",
            image1: "/macbook-air.png",
            image2: "/store-imac2.png",
            image3: "/store-imac3.png",
            link: "/macbook-air",
            img1: "/m3.png",
            desc1: "With M3, M3 Pro, or M3 Max, our most advanced chips for personal computers, MacBook Pro empowers you to take on the most demanding projects",
            img2: React.createElement(BsBatteryFull),
            desc2: "Go all day with up to 22 hours of battery life Footnote¹",
            img3: React.createElement(BiFullscreen),
            desc3: "Liquid Retina XDR display is the best ever in a laptop, with Extreme Dynamic Range, incredible contrast, and true-to-life colors",
            img4: React.createElement(BiCamera),
            desc4: "Look sharp and sound clear — anywhere — with the 1080p FaceTime HD camera, three studio-quality mics, and six speakers with Spatial Audio",
            img5: React.createElement(BsFillThunderboltFill),
            desc5: "Connect everything you need with up to three Thunderbolt 4 ports, an SDXC card slot, an HDMI port, a MagSafe 3 port, and a headphone jack",
        },

    },
    {
        title: "Macbook Pro",
        data:
        {
            name: "MacBook Pro 14-inch",
            price: "$1599",
            image1: "/macbook-pro.png",
            image2: "/store-imac2.png",
            image3: "/store-imac3.png",
            link: "/macbook-pro",
            img1: "/m3.png",
            desc1: "With M3, M3 Pro, or M3 Max, our most advanced chips for personal computers, MacBook Pro empowers you to take on the most demanding projects",
            img2: React.createElement(BsBatteryFull),
            desc2: "Go all day with up to 22 hours of battery life Footnote¹",
            img3: React.createElement(BiFullscreen),
            desc3: "Liquid Retina XDR display is the best ever in a laptop, with Extreme Dynamic Range, incredible contrast, and true-to-life colors",
            img4: React.createElement(BiCamera),
            desc4: "Look sharp and sound clear — anywhere — with the 1080p FaceTime HD camera, three studio-quality mics, and six speakers with Spatial Audio",
            img5: React.createElement(BsFillThunderboltFill),
            desc5: "Connect everything you need with up to three Thunderbolt 4 ports, an SDXC card slot, an HDMI port, a MagSafe 3 port, and a headphone jack",
        },

    },
    {
        title: "iMac",
        data:
        {
            name: "iMac",
            price: "$1299",
            image1: "/store-imac.png",
            image2: "/store-imac2.png",
            image3: "/store-imac3.png",
            link: "/imac",
            img1: "/m3.png",
            desc1: "Supercharged by the Apple M3 chip, so everything you do on your iMac is incredibly fast and responsive",
            img2: React.createElement(BiFullscreen),
            desc2: "Immersive 24-inch 4.5K Retina display Footnote¹",
            img3: React.createElement(BiDesktop),
            desc3: "Strikingly thin all-in-one desktop in seven vibrant colors",
            img4: React.createElement(BiCamera),
            desc4: "Look sharp and sound great with the 1080p FaceTime HD camera, three-mic array, and six-speaker sound system with Spatial Audio",
            img5: React.createElement(BiColor),
            desc5: "Color-matched Magic Mouse and Magic Keyboard included",
        },

    },
    {
        title: "Mac mini",
        data:
        {
            name: "Mac mini",
            price: "$599",
            image1: "/store-mini.png",
            image2: "/store-imac2.png",
            image3: "/store-imac3.png",
            link: "/mac-mini",
            img1: "/m2pro.png",
            desc1: "Do more and do it faster with the next-generation M2 or M2 Pro chip",
            img2: React.createElement(CgDesktop),
            desc2: "Mac mini turns any desk into a powerful workstation, so you can create, code and collaborate",
            img3: React.createElement(BiDesktop),
            desc3: "Strikingly thin all-in-one desktop in seven vibrant colors",
            img4: React.createElement(BiCamera),
            desc4: "Look sharp and sound great with the 1080p FaceTime HD camera, three-mic array, and six-speaker sound system with Spatial Audio",
            img5: React.createElement(BiColor),
            desc5: "Color-matched Magic Mouse and Magic Keyboard included",
        },

    },
    // {
    //     title: "Mac studio",
    //     price: "$999",
    //     img: "/pc pro.png",
    //     link: "/studio-display",
    // },
    // {
    //     title: "Mac Pro",
    //     price: "$599",
    //     img: "/mac pro.png",
    //     link: "/studio-display",
    // },
];
export const essentialsCard = [
    {
        title: "Accessories",
        desc: "Explore keyboards, mice, and other essentials.",
        img: "/essentials-accessories.png",
        link: "/accessories",
    },
    {
        title: "Studio Display",
        desc: "The 27-inch 5K Retina display pairs beautifully with any Mac.",
        img: "/essentials-display.png",
        link: "/studio-display",
    },
];
export const lineupData = [
    {
        "title": "Laptops",
        "data": [
            {
                name: "Macbook Air",
                processor: "M2 or M3 chip",
                description: "Strikingly thin and fast so you can work, play, or create anywhere.",
                link: "/imac",
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
                name: "MacBook Pro",
                processor: "M3, M3 Pro, or M3 Max chip",
                description: "The most advanced Mac laptops for demanding workflows.",
                link: "/macbook-plus",
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
                link: "/imac",
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
                link: "/imac",
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
                link: "/imac",
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
                link: "/imac",
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
                link: "/imac",
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
                link: "/imac",
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
];

export const multistepData = [
    {
        "quest": "Tell us, what will you use your Mac for?",
        "options": [
            {
                title: "Essentials",
                desc: "Everyday stuff and entertainment",
                icon: React.createElement(MdStars),
            },
            {
                title: "Work",
                desc: "Powering my profession",
                icon: React.createElement(BiDesktop),
            },
            {
                title: "Education",
                desc: "Taking my studies further",
                icon: React.createElement(MdCastForEducation),
            },
            {
                title: "Creative",
                desc: "Making & creating away from work",
                icon: React.createElement(MdDesignServices),
            },
        ]
    },

];
