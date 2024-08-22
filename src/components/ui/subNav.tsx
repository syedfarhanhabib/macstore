'use client';
import Link from 'next/link';
import { Button } from './button';
import React, { useState, useEffect } from 'react';

interface SubNavProps {
    title: string;
    navLinks: {
        label: string;
        href: string;
    }[];
    btnLink?: string;
    btnLabel?: string;
}

const SubNav = ({ title, navLinks, btnLink, btnLabel }: SubNavProps) => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>(navLinks[0]?.href || '');

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        let currentSection = navLinks[0]?.href || '';

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const offset = 100;

            if (sectionTop <= offset && sectionTop + sectionHeight > offset) {
                const id = section.getAttribute('id');
                if (id) {
                    currentSection = `#${id}`;
                }
            }
        });

        setActiveSection(currentSection);

        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navLinks]);

    return (
        <nav
            className={`w-full h-14 ${scrolled ? 'mt-0 bg-background/5' : 'mt-14 bg-muted'
                } fixed backdrop-blur-3xl py-2 z-[99999999] px-10 sm:px-32 lg:px-40 flex border-b border-muted items-center justify-between`}
        >
            <h3 className='subtitle'>{title}</h3>
            <section className='flex items-center gap-2'>
                {navLinks.map((link, index) => (
                    <Link key={index} href={link.href}>
                        <Button
                            size="sm"
                            variant="outline"
                            className={activeSection === link.href ? 'activeLink' : ''}
                        >
                            {link.label}
                        </Button>
                    </Link>
                ))}
                {btnLink && btnLabel && (
                    <Link href={btnLink}>
                        <Button size="sm" className="bg-accent">
                            {btnLabel}
                        </Button>
                    </Link>
                )}
            </section>
        </nav>
    );
};

export default SubNav;
