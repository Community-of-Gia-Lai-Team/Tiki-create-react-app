import { GETProduct, GETProductSlider, GETSliderYouTobe } from '@/services';
import { createContext, useEffect, useState } from 'react';

export const AppContextSave = createContext();

function ContextApp({ children }) {
    const [datas, setDatas] = useState([]);
    const [slider, setSlider] = useState([]);
    const [dataYouTobe, setDataYouTobe] = useState([]);

    useEffect(() => {
        const fetChApi = async () => {
            const results = await GETProduct();
            setDatas(results);
        };

        const fetChApi2 = async () => {
            const results = await GETProductSlider();
            setSlider(results);
        };

        const fetChApi3 = async () => {
            const results = await GETSliderYouTobe();
            setDataYouTobe(results);
        };

        fetChApi();
        fetChApi2();
        fetChApi3();
    }, []);

    return <AppContextSave.Provider value={{ datas, slider, dataYouTobe }}>{children}</AppContextSave.Provider>;
}

export default ContextApp;
