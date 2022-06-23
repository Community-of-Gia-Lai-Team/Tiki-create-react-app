import { createSlice } from '@reduxjs/toolkit';

const ListHeaderHome = createSlice({
    name: 'ListHeaderHome',
    initialState: [
        'Thịt, Rau Củ',
        'Bách Hóa',
        'Nhà Cửa',
        'Điện Tử',
        'Thiết Bị Số',
        'Điện Thoại',
        'Mẹ & Bé',
        'Làm Đẹp',
        'Gia Dụng',
        'Thời Trang Nữ',
        'Thời Trang Nam',
        'Giày Nữ',
        'Túi Nữ',
    ],
    reducers: {},
});
const { actions, reducer } = ListHeaderHome;
export const { addPost } = actions;
export default reducer;
