import { GETProduct, GETProductSlider } from '@/services';
import { createContext, useEffect, useState } from 'react';

export const AppContextSave = createContext();

function ContextApp({ children }) {
    const [datas, setDatas] = useState([]);
    const [slider, setSlider] = useState([]);

    useEffect(() => {
        const fetChApi = async () => {
            const results = await GETProduct();
            setDatas(results);
        };

        const fetChApi2 = async () => {
            const results = await GETProductSlider();
            setSlider(results);
        };

        fetChApi();
        fetChApi2();
    }, []);

    return <AppContextSave.Provider value={{ datas, slider }}>{children}</AppContextSave.Provider>;
}

export default ContextApp;
