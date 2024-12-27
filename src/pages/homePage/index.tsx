import React from 'react';
import { cn } from '@/lib/utils';
import Container from '@/shared/container';
import { CategoryCarsSlider } from '@/components/categoryCars';
import useGetCars from './hooks/useGetCars';
import { About } from './components/about';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/accordion';
import faqImg from '@/assets/faq.png';
import Title from '@/shared/Title';
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
                <div className="grid grid-cols-2 gap-10 bg-white p-5 rounded-lg max-md:grid-cols-1">
                    <div className="flex justify-center">
                        <img src={faqImg} className="max-h-[400px] max-md:h-[200px]" alt="" />
                    </div>
                    <div>
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
                        </Accordion>
                    </div>
                </div>
            </Container>
        </div>
    );
};
