'use client';
import Link from 'next/link';
import { Button } from './button';
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

type SubNavProps = {
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
    const [activeSection, setActiveSection] = useState<string>('');
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null)

    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLElement>('section[id]');
        let currentSection = '';

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;
            const offset = 110;

            if (sectionTop <= offset && sectionTop + sectionHeight > offset) {
                const id = section.getAttribute('id');
                if (id) {
                    currentSection = `#${id}`;
                }
            }
        });

        setActiveSection(currentSection);

        if (window.scrollY > 0 || document.documentElement.scrollTop > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navLinks]);

    return (
        // h-14
        <header
            ref={navRef}
            className={`w-full h-14 ${scrolled ? 'mt-0 bg-background/5' : 'mt-14 bg-muted'
                } fixed backdrop-blur-3xl z-[9] px-10 sm:px-32 lg:px-40  border-b border-muted grid transition-all py- duration-300 ${dropdownOpen ? "max-md:h-48" : "h-14"}`}>
            <nav className='flex items-center justify-between w-full bg-slate-50/0'>
                <h3 className='subtitle'>{title}</h3>
                <section className='flex items-center gap-2'>
                    <div className="navLinks md:flex gap-2 hidden">
                        {navLinks && navLinks.map((item, index) => (
                            <Link key={index} href={item.href}>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className={activeSection === item.href ? 'activeLink' : ''}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                    <button className={`flex md:hidden items-center justify-center w-10 h-10 ${dropdownOpen ? 'rotate-180' : ''} transition duration-150 ease-in-out`} onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <FaChevronDown />
                    </button>
                    {btnLink && btnLabel && (
                        <Link href={btnLink}>
                            <Button size="sm">
                                {btnLabel}
                            </Button>
                        </Link>
                    )}
                </section>
            </nav>
            {dropdownOpen && (
                <div className="navLinks md:hidden flex flex-col py-5 rounded-lg gap-2">
                    {navLinks && navLinks.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            key={index}>
                            <Link href={item.href}>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className={activeSection === item.href ? 'activeLink' : ''}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            )}
        </header>
    );
};

export default SubNav;
