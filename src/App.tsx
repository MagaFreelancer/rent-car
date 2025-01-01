import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '@/pages/auth/auth.tsx';
import { useAppDispatch } from '@/redux/store.ts';
import useAuth from '@/utils/hooks/useAuth.ts';
import { userAuthMe } from '@/redux/thunk/auth-fetch.ts';
import { useEffect } from 'react';
import Cars from '@/pages/cars/cars.tsx';
import PrivateRoute from '@/private-route.tsx';
import Profile from '@/pages/profile/profile.tsx';
import Header from '@/widgets/header';
import Footer from '@/widgets/footer';
import SinglePage from '@/pages/singlePage';
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
    const dispatch = useAppDispatch();
    const { status, storage } = useAuth();

    useEffect(() => {
        if (status) {
            dispatch(userAuthMe(storage.token));
        }
    }, [dispatch, status, storage]);

    return (
        <BrowserRouter>
            <div className="flex-col flex min-h-screen">
                <Header />

                <main className="flex-grow">
                    <Routes>
                        <Route path="auth/:type" element={<Auth />} />
                        <Route path="/cars" element={<Cars />} />
                        <Route path="/cars/:id" element={<SinglePage />} />
                        <Route element={<PrivateRoute restrictedToAuth={false} />}>
                            <Route path="auth/:type" element={<Auth />} />
                        </Route>
                        <Route element={<PrivateRoute restrictedToAuth={true} />}>
                            <Route path="/profile/*" element={<Profile />} />
                        </Route>
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
