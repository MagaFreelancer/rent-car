interface ICarTotalProps {
    days: number;
    deliveryOption: number;
    price: number;
    decrementSum: number;
    totalSum: number;
}
const CarTotal = ({ days, deliveryOption, price, decrementSum, totalSum }: ICarTotalProps) => {
    return (
        <div className="border-t-[1px] border-grey pt-4">
            <div className="mb-4 text-lg font-semibold text-blackBlue">
                <span className="font-bold text-3xl">{price} ₽</span>/ сутки
            </div>
            <div>
                <div className="flex justify-between text-sm font-semibold mb-2">
                    <div>Аренда {days} сут</div>
                    <div className="text-placeholder600">{price * days} ₽</div>
                </div>
                {deliveryOption !== 0 && (
                    <div className="flex justify-between text-sm font-semibold mb-2">
                        <div>Доставка</div>
                        <div className="text-placeholder600">{deliveryOption} ₽</div>
                    </div>
                )}
                {decrementSum !== 0 && (
                    <div className="flex justify-between text-sm font-semibold mb-5 text-red600">
                        <div>Скидка на аренду от 7 суток</div> <div>-{decrementSum} ₽</div>
                    </div>
                )}
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
