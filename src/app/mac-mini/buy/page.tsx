import SubNav from '@/components/ui/subNav'
import React from 'react'

const page = () => {
    const navLinks = [
        { label: 'Overview', href: '#overview' },
        { label: 'Tech specs', href: '#tech-specs' },
        { label: 'Compare', href: '#compare' },
    ];
  return (
    <main>
        <SubNav title='Mac mini' navLinks={navLinks} />
        <section className='h-dvh pt-40 px-section overflow-clip' >
            <h1 className='heading' >About.</h1>
            <h3 className='title gradientText' >Leveraging the power of technology.</h3>
            <div className={`w-full mt-5 gap-10`} >
                {/* Add cards here */}
            </div>
        </section>

    </main>
  )
}

export default page