import Header from '@/widgets/header/header.tsx';
import { BrowserRouter, /*Route,*/ Routes } from 'react-router-dom';
import TopNav from '@/widgets/topNav/top-nav.tsx';
import Footer from '@/widgets/footer/footer.tsx';

function App() {
    return (
        <BrowserRouter>
            <div className="flex-col flex min-h-screen">
                <TopNav />
                <Header />

                <main className="flex-grow">
                    <Routes>{/*<Route path="/" element={<App/>} />*/}</Routes>
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
