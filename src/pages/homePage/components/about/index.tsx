import React from 'react';
import { cn } from '@/lib/utils';
import Title from '@/shared/Title';

interface Props {
    className?: string;
}

export const About: React.FC<Props> = ({ className }: Props) => {
    return (
        <div className={cn('font-montserrat', className)}>
            <Title className="mb-10 font-black">Почему мы?</Title>
            <ul className="bg-white shadow-md px-12">
                <li className=" flex  justify-between items-center py-12 border-b-[1px] border-black/10">
                    <div className="text-2xl font-black">Без мелкого шрифта</div>
                    <p className="font-sm">
                        Все условия и все цены мы держим на виду. Никаких скрытых платежей, сборов,
                        налогов. Вы сразу видите конечную цену, которая не изменится, пока вы
                        оформляете заказ.
                    </p>
                </li>

                <li className=" flex  justify-between items-center  py-12 border-b-[1px] border-black/10">
                    <div className="text-2xl font-black">Без мелкого шрифта</div>
                    <p className="font-sm">
                        Все условия и все цены мы держим на виду. Никаких скрытых платежей, сборов,
                        налогов. Вы сразу видите конечную цену, которая не изменится, пока вы
                        оформляете заказ.
                    </p>
                </li>
                <li className=" flex  justify-between items-center py-12 ">
                    <div className="text-2xl font-black">Без мелкого шрифта</div>
                    <p className="font-sm">
                        Все условия и все цены мы держим на виду. Никаких скрытых платежей, сборов,
                        налогов. Вы сразу видите конечную цену, которая не изменится, пока вы
                        оформляете заказ.
                    </p>
                </li>
            </ul>
        </div>
    );
};
