import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { lineupData } from '@/lib/data';

interface FormCardProps {
    itemName: string;
}

const FormCard = ({ itemName }: FormCardProps) => {
    const product = lineupData.flatMap(category => category.data).find(item => item.name === itemName);
    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <section className='flex flex-col md:flex-row items-start gap-5 bg-background p-10 rounded-2xl'>
            <Image src={product.img} alt={itemName} width={300} height={300} className='w-full md:w-1/3  object-contain' />
            <div className="right flex flex-col gap-5">
                <div className='flex flex-col md:flex-row gap-5' >
                    <div className='flex flex-col gap-2 md:gap-0 leading-none'>
                        <h2 className='title' >{itemName}</h2>
                        <h5 className='subtitle' >{product.processor}</h5>
                        <p className='desc' >{product.description}</p>
                    </div>
                    <Link href={product.link}><Button className='w-fit' size={"sm"} >Shop</Button></Link>
                </div>
                <div className='flex flex-col'>
                    <Image src={product.processorImg} alt={product.processor} width={100} height={100} className='w-fit h-10 object-contain' />
                    <p className='desc' >{product.processor}</p>
                </div>
            </div>
        </section>
    )
}

export default FormCard