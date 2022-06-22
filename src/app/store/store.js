import { configureStore } from '@reduxjs/toolkit';
import { ListNav } from '@/app/appSlice';

const store = configureStore({
    reducer: {
        listNav: ListNav,
    },
});

export default store;
