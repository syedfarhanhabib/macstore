// components/Video.tsx
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface videoProps {
    videoSrc: string;
}

const Video = ({ videoSrc }: videoProps) => {
    const controls = useAnimation();
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        controls.start({
            width: scrollY > 0 ? '80%' : '100%',
            transition: { duration: 0.5 },
            backgroundPosition: scrollY > 0 ? 'center' : '0% 50%',
            backgroundSize: scrollY > 0 ? 'cover' : '100% 100%',
            backgroundRepeat: 'no-repeat',
            backgroundBlendMode: scrollY > 0 ? 'normal' : 'multiply',
        });
    }, [scrollY, controls]);

    return (
        <motion.div
            animate={controls}
            className='mx-auto'
        >
            <video
                src={videoSrc}
                className="w-full mx-auto h-[60vh] rounded-3xl object-cover"
                playsInline
                autoPlay
                loop
                muted
            />
        </motion.div>
    );
};

export default Video;
