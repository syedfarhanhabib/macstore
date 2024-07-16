'use client';
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { MdAirplanemodeActive, MdCastForEducation, MdDesk, MdStars } from 'react-icons/md';
import { BiDesktop, BiHome, BiLeftArrow, BiLeftArrowAlt } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';



const QuizForm = () => {
    const [selected, setSelected] = React.useState<string | null>(null);
    const handleSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
    };
    const [usage, setUsage] = React.useState<string>();
    const [place, setPlace] = React.useState<string>();
    const [budget, setBudget] = React.useState<string>();
    const [step, setStep] = React.useState(1);
    const [answers, setAnswers] = React.useState([]);
    const handleNext = () => {
        setStep(step + 1)
    }
    const handlePrev = () => {
        setStep(step - 1)
    }
    const form = useForm()
    return (
        <section className="relative overflow-hidden bg-muted rounded-3xl" >
            <div className='flex flex-col justify-between relative p-10 max-w-[85vw] min-h-[85vh] mx-auto px-10 sm:px-32 lg:px-64' >
                <div className='' >
                    <motion.div
                        initial={{ opacity: 0, y: '20%', scaleY: '90%' }}
                        whileInView={{ opacity: 1, y: '0%', scaleY: '100%', }}
                        viewport={{ once: true }}
                        className=" grid gap-5 mb-5 ">
                        {step === 1 && (
                            <p className="desc">Answer a few questions to get a personalized recommendation.</p>
                        )}
                        <Progress value={(step / 4) * 100} />
                    </motion.div>
                    {step === 1 && (
                        <motion.form
                            initial={{ opacity: 0, y: '30%', scaleY: '90%' }}
                            whileInView={{ opacity: 1, y: '0%', scaleY: '100%' }}
                            viewport={{ once: true }}
                            className='grid gap-5' >
                            <h1 className="title"> <h1 className="title">Tell us, what will you
                                use your Mac for?</h1></h1>
                            <label htmlFor="essential" className='labelOption' >
                                <input type="radio" name='usage' value='essential' id='essential' className='hidden' onChange={(e) => { setUsage(e.target.value) }} />
                                <i className='w-fit text-3xl' ><MdStars /></i>
                                <div className='flex flex-col' >
                                    <h3 className='subtitle font-medium' >Essentials</h3>
                                    <p className='desc'>Everyday stuff and entertainment</p>
                                </div>
                            </label>
                            <label htmlFor="work" className='labelOption' >
                                <input type="radio" name='usage' value='work' id='work' className='hidden' onChange={(e) => { setUsage(e.target.value) }} />
                                <i className='w-fit text-3xl' ><BiDesktop /></i>
                                <div className='flex flex-col' >
                                    <h3 className='subtitle font-medium' >Work</h3>
                                    <p className='desc'>Powering my profession</p>
                                </div>
                            </label>
                            <label htmlFor="education" className='labelOption' >
                                <input type="radio" name='usage' value='education' id='education' className='hidden' onChange={(e) => { setUsage(e.target.value) }} />
                                <i className='w-fit text-3xl' ><MdCastForEducation /></i>
                                <div className='flex flex-col' >
                                    <h3 className='subtitle font-medium' >Education</h3>
                                    <p className='desc'>Taking my studies further</p>
                                </div>
                            </label>
                            <h1 className='desc'>{usage}</h1>
                        </motion.form>
                    )}
                    {step === 2 && (
                        <motion.form
                            initial={{ opacity: 0, y: '30%', scaleY: '90%' }}
                            whileInView={{ opacity: 1, y: '0%', scaleY: '100%' }}
                            viewport={{ once: true }}
                            className='grid gap-5' >
                            <h1 className="title">And where will you use
                                your Mac?</h1>
                            <label htmlFor="fixed" className='labelOption' >
                                <input type="radio" name='place' value='fixed' id='fixed' className='hidden' onChange={(e) => { setPlace(e.target.value) }} />
                                <i className='w-fit text-3xl' ><MdDesk /></i>
                                <div className='flex flex-col' >
                                    <h3 className='subtitle font-medium' >
                                        Always in a fixed place, like my desk</h3>
                                </div>
                            </label>
                            <label htmlFor="home" className='labelOption' >
                                <input type="radio" name='place' value='home' id='home' className='hidden' onChange={(e) => { setPlace(e.target.value) }} />
                                <i className='w-fit text-3xl' ><BiHome /></i>
                                <div className='flex flex-col' >
                                    <h3 className='subtitle font-medium' >Around my home</h3>
                                </div>
                            </label>
                            <label htmlFor="airplane" className='labelOption' >
                                <input type="radio" name='place' value='airplane' id='airplane' className='hidden' onChange={(e) => { setPlace(e.target.value) }} />
                                <i className='w-fit text-3xl' ><MdAirplanemodeActive /></i>
                                <div className='flex flex-col' >
                                    <h3 className='subtitle font-medium' >On long journeys</h3>
                                </div>
                            </label>
                            <h1 className='desc'>{place}</h1>
                        </motion.form>
                    )}
                    {step === 3 && (
                        <motion.form
                            initial={{ opacity: 0, y: '30%', scaleY: '90%' }}
                            whileInView={{ opacity: 1, y: '0%', scaleY: '100%' }}
                            viewport={{ once: true }}
                            className='grid gap-5' >
                            <h1 className="title">Lastly, do you have a budget in mind?</h1>
                            <label htmlFor="1000" className='labelOption' >
                                <input type="radio" name='budget' value='1000' id='1000' className='hidden' onChange={(e) => { setBudget(e.target.value) }} />
                                <h3 className='subtitle font-medium' >Upto $1,000</h3>
                            </label>
                            <label htmlFor="1500" className='labelOption' >
                                <input type="radio" name='budget' value='1500' id='1500' className='hidden' onChange={(e) => { setBudget(e.target.value) }} />
                                <h3 className='subtitle font-medium' >Upto $1,500</h3>
                            </label>
                            <label htmlFor="2000" className='labelOption' >
                                <input type="radio" name='budget' value='2000' id='2000' className='hidden' onChange={(e) => { setBudget(e.target.value) }} />
                                <h3 className='subtitle font-medium' >$2,000 and over</h3>
                            </label>
                            <h1 className='desc'>{budget}</h1>
                        </motion.form>
                    )}
                </div>
                <div className="btns z-10 flex items-center justify-between ">
                    <Button variant={"outline"} onClick={handlePrev} disabled={step === 1} size={"icon"}>
                        <FaArrowLeft />
                    </Button>
                    <Button className='bg-accent' onClick={handleNext}>
                        <motion.h3
                            initial={{ opacity: 0, scaleX: '90%' }}
                            whileInView={{ opacity: 1, scaleX: '100%' }}
                            viewport={{ once: true }} >
                            {/* {selected ? 'Next' : 'Please select an option'} */}
                            Next
                        </motion.h3>
                    </Button>
                </div>
            </div>
            {/* <div className='bg-gradient-to-t from-muted via-muted to-muted/0 w-full h-44 absolute bottom-0 ' /> */}
        </section>
    )
}

export default QuizForm