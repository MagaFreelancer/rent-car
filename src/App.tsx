import Header from '@/widgets/header/header.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopNav from '@/widgets/topNav/top-nav.tsx';
import Footer from '@/widgets/footer/footer.tsx';
import Auth from '@/pages/auth/auth.tsx';
import SinglePage from './pages/singlePage/single-page';
import { features } from 'process';
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

const App = () => {
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
                        <Route path="/login" element={<Auth />} />
                        <Route path="/cars/:id" element={<SinglePage />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
