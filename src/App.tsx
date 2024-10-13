import Container from '@/shared/Container.tsx';
import {
    CardBrand,
    CardButton,
    CardFavorite,
    CardGroup,
    CardInfo,
    CardModel,
    CardPrice,
    CardProvider,
    CardSlider,
} from './components/card';
import { Route, Routes } from 'react-router-dom';
import SinglePage from './pages/single-page';

function App() {
    const obj = {
        id: 1,
        transmission: 'Manual',
        engine: 1.5,
        brand: 'BMW',
        model: 'X5',
        price: 20,
        imgs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
        ],
        sale: 20,
        hit: true,
        fuel: 70, //бензин
        capacity: 4,
    };
    return (
        <Container>
            <Routes>
                <Route path="/cars/:id" element={<SinglePage />} />
            </Routes>

            <CardProvider {...obj}>
                <CardFavorite />
                <CardModel />
                <CardBrand />
                <CardSlider />
                <CardInfo />
                <CardGroup>
                    <CardPrice />
                    <CardButton />
                </CardGroup>
            </CardProvider>
        </Container>
    );
}

export default App;
