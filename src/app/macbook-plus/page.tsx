'use client';
import SubNav from '@/components/ui/subNav'
import React from 'react'

function page() {
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
    <main className='h-[200vh]' >
      <SubNav title='Macbook Plus' link='/' />
      <section className='pt-36 overflow-x-hidden' >
        <h3 className='title text-center' >Macbook Plus</h3>
        <h1 className='text-center heading gradientText' >
          Mind-blowing.
          Head-turning.<br />
          Unrivalled.</h1>
        <video
          muted
          // autoPlay
          autoPlay={scrolled}
          className='w-[5990px] object-contain'
          src="https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/welcome-hero/large.mp4"></video>
      </section>
    </main>
  )
}

export default page