import Container from '@/shared/Container.tsx';
import {
    CardFavorite,
    CardName,
    CardPrice,
    CardProvider,
    CardSale,
    CardSlider,
    CardType,
} from './components/card';

function App() {
    const obj = {
        id: 1,
        transmission: 'mechanical',
        engine: 1.5,
        name: 'BMW X5',
        price: 20,
        imgs: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57qMg7vgreQWqQiZybgJ_wh7mZt8XXkKDCQ&s',
        ],
        sale: 20,
        hit: true,
    };
    return (
        <Container>
            <CardProvider {...obj}>
                <CardSlider />
                <CardType />
                <CardName />
                <CardPrice />
                <CardSale />
            </CardProvider>
        </Container>
    );
}

export default App;
