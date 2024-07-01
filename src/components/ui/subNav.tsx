'use client'
import Link from 'next/link';
import { Button } from './button';
import React from 'react';

interface subNavProps {
    title: string;
    link: string;
}

const SubNav = ({ title, link }: subNavProps) => {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`w-full h-14 ${scrolled ? 'mt-0 bg-background/5' : 'mt-14 bg-muted'} fixed backdrop-blur-lg py-2 z-[99999999] px-10 sm:px-20 lg:px-48 flex border-b border-muted items-center justify-between`} >
            <h3 className='subtitle font-medium' >{title}</h3>
            <Link href={link} ><Button size={"sm"} className='bg-accent' >Buy</Button></Link>
        </nav>
    );
};

export default SubNav;
