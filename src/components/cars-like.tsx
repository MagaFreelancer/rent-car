import CarsLikeList from './cars-like-list';

const CarsLike = () => {
    return (
        <div className="bg-white py-6 px-4 mb-4 rounded-lg">
            <h2 className="mb-6">Похожие автомобили</h2>
            <CarsLikeList />
        </div>
    );
};

export default CarsLike;
