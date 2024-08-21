'use client'
import Link from 'next/link';
import { Button } from './button';
import React, { useState } from 'react';

interface subNavProps {
    title: string;
    link: string;
    btn?: string;
}

const SubNav = ({ title, link, btn }: subNavProps) => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add event listener to scroll event
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`w-full h-14 ${scrolled ? 'mt-0 bg-background/5' : 'mt-14 bg-muted'} fixed backdrop-blur-3xl py-2 z-[99999999] px-10 sm:px-32 lg:px-40 flex border-b border-muted items-center justify-between`} >
            <h3 className='subtitle' >{title}</h3>
            <Link href={link} ><Button size={"sm"} className='bg-accent' >{btn}</Button></Link>
        </nav>
    );
};

export default SubNav;
