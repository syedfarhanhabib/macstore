'use client';
<<<<<<< HEAD
=======

>>>>>>> 141ca5ea86fc798637f9ed1fc61cf1dee4048559
import SubNav from '@/components/ui/subNav';
import React from 'react';

const Page: React.FC = () => {
<<<<<<< HEAD
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
                    className='w-[130vw] absolute center translate-y-20 object-contain'
                    src='https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/welcome-hero/large.mp4'
                ></video>
            </section>
        </main>
    );
};

export default Page;
=======
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
    <main className='h-[200vh]'>
      <SubNav title='Macbook Plus' link='/' />
      <section className='pt-36 overflow-x-hidden'>
        <h3 className='title text-center'>Macbook Plus</h3>
        <h1 className='text-center heading gradientText'>
          Mind-blowing.
          <br />
          Unrivalled.
        </h1>
        <video
          muted
          ref={videoRef}
          className='w-[130vw] absolute center translate-y-20 object-contain'
          src='https://www.apple.com/105/media/us/macbook-pro/2023/232a2dbf-5898-4fd1-a350-6a7c5c2e31c9/anim/welcome-hero/large.mp4'
        ></video>
      </section>
    </main>
  );
};

export default Page;
>>>>>>> 141ca5ea86fc798637f9ed1fc61cf1dee4048559
