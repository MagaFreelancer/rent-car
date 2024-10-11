import Header from '@/widgets/header/header.tsx';
import { BrowserRouter, /*Route,*/ Routes } from 'react-router-dom';
import TopNav from '@/widgets/topNav/top-nav.tsx';

function App() {
    return (
        <BrowserRouter>
            <TopNav />
            <Header />

            <Routes>{/*<Route path="/" component={App} />*/}</Routes>
        </BrowserRouter>
    );
}

export default App;
