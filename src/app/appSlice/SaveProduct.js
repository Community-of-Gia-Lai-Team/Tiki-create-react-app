import { createSlice } from '@reduxjs/toolkit';

const SaveProductAPI = createSlice({
    name: 'ListHeaderHome',
    initialState: [],
    reducers: {
        SaveProductsAction(state, action) {
            const newState = [action.payload];

            return newState;
        },
    },
});
const { actions, reducer } = SaveProductAPI;
export const { SaveProductsAction } = actions;
export default reducer;
