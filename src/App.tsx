import Header from '@/widgets/header/header.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from '@/widgets/topNav/top-nav.tsx';
import Footer from '@/widgets/footer/footer.tsx';
import Auth from '@/pages/auth/auth.tsx';
import SinglePage from './pages/singlePage/single-page';
import { useAppDispatch } from '@/redux/store.ts';
import PrivateRoute from '@/private-route.tsx';
import Profile from '@/pages/profile/profile.tsx';
import { useEffect } from 'react';
import useAuth from '@/utils/hooks/useAuth.ts';
import { userAuthMe } from '@/redux/thunk/auth-fetch.ts';

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
            {/*<CardProvider {...obj}>*/}
            {/*    <CardFavorite />*/}
            {/*    <CardBrand />*/}
            {/*    <CardModel />*/}
            {/*    <CardSlider />*/}
            {/*    <CardInfo />*/}
            {/*    <CardGroup>*/}
            {/*        <CardPrice />*/}
            {/*        <CardButton />*/}
            {/*    </CardGroup>*/}
            {/*</CardProvider>*/}

            <div className="flex-col flex min-h-screen">
                <TopNav />
                <Header />

                <main className="flex-grow">
                    <Routes>
                        <Route path="/cars/:id" element={<SinglePage />} />
                        <Route element={<PrivateRoute restrictedToAuth={false} />}>
                            <Route path="auth/:type" element={<Auth />} />
                        </Route>
                        <Route element={<PrivateRoute restrictedToAuth={true} />}>
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
