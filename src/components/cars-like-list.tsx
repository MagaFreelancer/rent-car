import CarsLikeItem from './cars-like-item';

const CarsLikeList = () => {
    return (
        <ul className="grid grid-cols-3 gap-5">
            {Array.from({ length: 5 }).map((_, index) => (
                <CarsLikeItem key={index} />
            ))}
        </ul>
    );
};

export default CarsLikeList;
