const CarMoreInfo = ({ mileageMax, surcharge }: { mileageMax: string; surcharge: string }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
                <div>Включенный пробег</div>
                <div>{mileageMax} км</div>
            </div>
            <div className="flex justify-between text-sm">
                <div>Доплата за превышение</div>
                <div>{surcharge} ₽ / км</div>
            </div>
        </div>
    );
};

export default CarMoreInfo;
