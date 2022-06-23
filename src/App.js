import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Nav } from './components/DefaultLayOut';
import Home from '@/Features/Pages/Home';

const ModalLoad = lazy(() => import('@/components/Pages/Modal'));

function App() {
    return (
        <div className="App">
            <Nav />
            <div>
                <Suspense fallback={<div>...Loading....</div>}>
                    <Routes>
                        <Route path="/login" element={<ModalLoad />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}

export default App;
