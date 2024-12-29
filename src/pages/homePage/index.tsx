import React from 'react';
import { cn } from '@/lib/utils';
import Container from '@/shared/container';
import { CategoryCarsSlider } from '@/components/categoryCars';
import useGetCars from './hooks/useGetCars';
import { About } from './components/about';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/accordion';
import faqImg from '@/assets/faq.png';
import Title from '@/shared/Title';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/shared/button';
interface Props {
    className?: string;
}

export const HomePage: React.FC<Props> = ({ className }: Props) => {
    const { statusCars, cars } = useGetCars();
    console.log(statusCars, cars);

    return (
        <div className={cn('', className)}>
            <Container>
                <CategoryCarsSlider objs={cars} title="Cars" beforeTitle="New" />
                <About />
                <div className="flex gap-10 bg-white p-5 rounded-lg max-md:flex-col max-md:items-center">
                    <div className="flex-1 max-md:w-full">
                        <Title className="mb-5 ">FAQ</Title>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className="max-w-[410px] flex flex-col items-center pt-[67px] px-8 pb-[42px] border-[1px] max-sm:max-w-full">
                        <MessageCircle width={100} height={100} className="mb-10" />
                        <div className="text-2xl font-extrabold text-center mb-5">
                            Do you have more questions?
                        </div>
                        <p className="text-center mb-5">
                            End-to-end payments and financial management in a single solution. Meet
                            the right platform to help realize.
                        </p>
                        <Button>
                            <a href="#"> Shoot a Direct Mail</a>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};
