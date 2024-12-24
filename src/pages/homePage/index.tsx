import React from 'react';
import { cn } from '@/lib/utils';
import Container from '@/shared/container';
import { CategoryCarsSlider } from '@/components/categoryCars';
import useGetCars from './hooks/useGetCars';

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
            </Container>
        </div>
    );
};
