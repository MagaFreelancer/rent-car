import CarInfoList from './components/car-info-list';

const CarInfo = ({ rentalRules, carSpecifications }: any) => {
    return (
        <div className="bg-white py-6 px-4 mb-4 rounded-lg">
            <div className="mb-5">
                <h3 className="mb-3">Правила аренды</h3>
                <CarInfoList carDetails={rentalRules} />
            </div>
            <div>
                <h3 className="mb-3">Характеристики автомобиля</h3>
                <ul>
                    <CarInfoList carDetails={carSpecifications} />
                </ul>
            </div>
        </div>
    );
};

export default CarInfo;
