import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/DefaultLayOut';
import Home from '@/Features/Pages/Home';

function App() {
    return (
        <div className="App">
            <Nav />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
