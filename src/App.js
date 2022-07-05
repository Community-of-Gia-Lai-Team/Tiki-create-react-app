import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { Nav } from './components/DefaultLayOut';
import Home from '@/Features/Pages/Home';

const ModalLoad = lazy(() => import('@/components/Pages/Modal'));

const config = {
    apiKey: process.env.REACT_APP_API_LOGIN,
    authDomain: process.env.REACT_APP_DOMAIN_LOGIN,
    // ...
};

if (!firebase.apps.length) {
    // firebase.initializeApp({});
    firebase.initializeApp(config);
}

function App() {
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                console.log('USer is not logged in');
                return;
            } else {
                const token = await user.getIdToken();
                console.log(user.displayName);
                console.log(token);
            }
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);

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
