'use client';
import SubNav from '@/components/ui/subNav';
import React from 'react';

const Page: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 0 && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.play();
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <SubNav title='Macbook Plus' link='/' btn='Buy' />
      <section className='pt-36 min-h-dvh overflow-x-hidden px-section'>
        <h3 className='desc text-center'>Exclusive</h3>
        <h1 className='text-center heading gradientText'>
          Mind-blowing.
          <br />
          Unrivalled.
        </h1>
        <video
          muted
          ref={videoRef}
          className='w-[130vw h-90vh absolute center translate-y-20 object-contain'
          src='/macbook-plus.mp4'
        ></video>
      </section>
    </main>
  );
};

export default Page;
