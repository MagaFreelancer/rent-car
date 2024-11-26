import useCarSale from '@/utils/hooks/useCarSale';

const CarTotal = ({ days, deliveryOption, price }: any) => {
    const { decrementSum, totalSum, proc } = useCarSale(price, days);

    return (
        <div className="border-t-[1px] border-grey pt-4">
            <div className="mb-4 text-lg font-semibold text-blackBlue">
                <span className="font-bold text-3xl">{price} ₽</span>/ сутки
            </div>
            <div>
                <div className="flex justify-between text-sm  font-semibold mb-2">
                    <div>Аренда {days} сут</div>
                    <div className="text-placeholder600 ">{price * days} ₽</div>
                </div>
                <div className="flex justify-between text-sm  font-semibold mb-2">
                    <div>Доствака и возврат</div>
                    <div className="text-placeholder600 ">{deliveryOption} ₽</div>
                </div>
                <div className="flex justify-between text-sm  font-semibold mb-5  text-red600">
                    <div>Скидка на аренду от 7 суток</div> <div>-{decrementSum} ₽</div>
                </div>
                <div className="flex justify-between text-base font-semibold mb-4">
                    <div className="">Всего</div> <div>{totalSum} ₽</div>
                </div>
                <p className="text-xs text-placeholder">
                    Вы пока ни за что не платите. Оставив заявку, можно лично обговорить детали
                    бронирования с собственником автомобиля.
                </p>
            </div>
        </div>
    );
};

export default CarTotal;
