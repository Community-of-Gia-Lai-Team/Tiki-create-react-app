import { createSlice } from '@reduxjs/toolkit';

const ListNav = createSlice({
    name: 'Listnav',
    initialState: [
        'trái cây',
        'thịt, trứng',
        ' rau củ quả',
        'sữa, bơ, phô mai',
        'hải sản',
        'gạo, mì ăn liền',
        'đồ uống, bia rượu',
        'bánh kẹo',
        'bánh cho trẻ em',
    ],
    reducers: {
        addPost(state, action) {
            state.push(action.payload);
        },
    },
});
const { actions, reducer } = ListNav;
export const { addPost } = actions;
export default reducer;
