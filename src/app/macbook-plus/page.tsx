import SubNav from '@/components/ui/subNav';
import ThemeSwitch from '@/components/ui/theme';
import Title from '@/components/ui/title';
import React from 'react';

const page: React.FC = () => {
  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Specifications', href: '#specs' },
    { label: 'Compare', href: '#compare' },
  ]

  return (
    <main>
      <ThemeSwitch defaultTheme='dark' />
      <SubNav title='Macbook Plus' navLinks={navLinks} btnLink='/' btnLabel='Buy' />
      <section id='overview' className='pt-36 min-h-dvh overflow-x-hidden px-section'>
        <h3 className='desc text-center'>Exclusive</h3>
        <Title className='text-center mx-auto heading' bg='/random/2.jpg'>Mind-blowing.<br />Unrivalled.</Title>
      </section>
      <section id='specs' className='min-h-dvh pt-20' >
        <Title className='text-center mx-auto heading' bg='/random/18.jpg'>Mind-blowing.<br />Unrivalled.</Title>
      </section>
      <section id='compare' className='min-h-dvh pt-20' >
        <Title className='text-center mx-auto heading' bg='/random/5.jpg'>Mind-blowing.<br />Unrivalled.</Title>
      </section>
    </main>
  );
};

export default page;
