import Card from '@/components/store/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'
import CardInfo from '@/components/store/cardInfo'
import ThemeSwitch from '@/components/ui/theme'

const page = () => {
    return (
        <main>
            <ThemeSwitch defaultTheme="light" />
            <section className='h-dvh pt-20 px-section overflow-clip' >
                <h1 className='heading' >Store.</h1>
                <h3 className='title gradientText' >All models. Take your pick.</h3>
                <div className={`w-full mt-5 gap-10`} >
                    <Carousel className={``} >
                        <CarouselContent className=' ' >
                            <CardInfo />
                        </CarouselContent>
                        <div className="flex items-center absolute bg-black right-10 w-fit h-4 z-10 md:right-16 sm:top-20 lg:top-40">
                            <CarouselNext />
                            <CarouselPrevious />
                        </div>
                    </Carousel>
                </div>
            </section>
            <section className='w-full px-section min-h-dvh pt-20' >
                <h1 className='title' >Essentials.</h1>
            </section>
        </main>
    )
}

export default page