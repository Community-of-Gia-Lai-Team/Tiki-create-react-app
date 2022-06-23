import { configureStore } from '@reduxjs/toolkit';
import { ListHeaderHome, ListNav } from '@/app/appSlice';

const store = configureStore({
    reducer: {
        listNav: ListNav,
        listHeaderHom: ListHeaderHome,
    },
});

export default store;
