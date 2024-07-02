import Card from '@/components/store/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { storeCard } from '@/lib/data'
import React from 'react'
import styles from '@/css/styles.module.css'
import CardInfo from '@/components/store/cardInfo'

const page = () => {
    return (
        <main className={`py-20 px-4 md:px-10 overflow-x-hidden`} >
            <section>
                <h1 className='heading' >Store.</h1>
                <h3 className='title gradientText' >All models. Take your pick.</h3>
                <div className={`w-full mt-5 gap-10`} >
                    <Carousel className={``} >
                        <CarouselContent className='gap-10' >
                            <CardInfo />
                        </CarouselContent>
                        <div className="flex items-center absolute bg-black right-10 w-fit h-4 z-10 md:right-16 sm:top-20 lg:top-40">
                            <CarouselNext />
                            <CarouselPrevious />
                        </div>
                    </Carousel>
                </div>
            </section>
        </main>
    )
}

export default page