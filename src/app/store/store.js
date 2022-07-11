import { configureStore } from '@reduxjs/toolkit';
import { ListHeaderHome, ListNav, SaveProduct } from '@/app/appSlice';

const store = configureStore({
    reducer: {
        listNav: ListNav,
        listHeaderHom: ListHeaderHome,
        SaveProduct: SaveProduct,
    },
});

export default store;
