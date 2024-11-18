import CarInfoItem from './car-info-item';

const getLabel = (key: string): string => {
    const labels: Record<string, string> = {
        deposit: 'Депозит',
        minimumExperience: 'Минимальный стаж',
        minimumAge: 'Минимальный возраст',
        insurance: 'Страховка',
        engine: 'Двигатель',
        drive: 'Привод',
        year: 'Год',
        seats: 'Мест',
        transmission: 'Коробка',
        mileage: 'Пробег',
        body: 'Кузов',
        class: 'Класс',
        steering: 'Руль',
        mileageMax: 'Включенный пробег',
    };
    return labels[key] || key;
};

const CarInfoList = ({ carDetails }: { carDetails: any }) => {
    return (
        <ul>
            {Object.entries(carDetails).map(([key, value]: any) => (
                <CarInfoItem
                    key={key}
                    properties={getLabel(key)}
                    supp={value.supp}
                    text={value.text}
                />
            ))}
        </ul>
    );
};

export default CarInfoList;
