import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '@/pages/auth/auth.tsx';
// import Container from '@/shared/container.tsx';
// import {
//     CardBrand,
//     CardButton,
//     CardFavorite,
//     CardGroup,
//     CardInfo,
//     CardModel,
//     CardPrice,
//     CardProvider,
//     CardSlider,
// } from './components/card';
// import SinglePage from './pages/single-page';
//
// const obj = {
//     id: 1,
//     transmission: 'Manual',
//     engine: 1.5,
//     brand: 'BMW',
//     model: 'X5',
//     price: 20,
//     imgs: [
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
//     ],
//     sale: 20,
//     hit: true,
//     fuel: 70, //бензин
//     capacity: 4,
// };

const App = () => {
    return (
        <BrowserRouter>
            <div className="flex-col flex min-h-screen">
                <main className="flex-grow">
                    <Routes>
                        {/* <Route path="/cars/:id" element={<SinglePage />} /> */}
                        <Route path="auth/:type" element={<Auth />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
