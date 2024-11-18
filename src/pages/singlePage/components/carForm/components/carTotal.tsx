
const CarTotal = () => {
    return (
        <div className="border-t-[1px] border-grey py-6 px-4 ">
            <div className="mb-4 text-lg font-semibold" > <span className="font-bold text-3xl">4000 ₽</span>/ сутки</div>
            <div >
                <div className="flex justify-between text-xs font-inter font-semibold mb-1">
                    <div>Аренда 12 сут, 3 ч</div> <div className="text-placeholder600 font-sm">51 030 ₽</div>
                </div>
                <div className="flex justify-between text-xs font-inter font-semibold mb-2  text-red600">
                    <div>Скидка на аренду от 7 суток</div> <div>-3 000 ₽</div>
                </div>
                <div className="flex justify-between text-base font-semibold mb-5">
                    <div className="">Всего</div> <div>48 030 ₽</div>
                </div>
                <p className="text-xs text-placeholder">
                    Вы пока ни за что не платите.
                    Оставив заявку, можно лично обговорить детали
                    бронирования с собственником
                    автомобиля.
                </p>
            </div>
        </div>
    )
}

export default CarTotal