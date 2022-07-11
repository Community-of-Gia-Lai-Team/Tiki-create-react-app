import * as request from '@/utils/httpRequest';
import * as APIget from '../utils/httpRequestAPIproDucts';

export const Search = async (q) => {
    try {
        const res = await request.get('users/search?', {
            params: {
                q,
                type: 'less',
            },
        });

        return res.data;
    } catch (err) {
        //
    }
};

export const GETProduct = async (q) => {
    try {
        const res = await APIget.Get('products');

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const GETProductSlider = async (q) => {
    try {
        const res = await APIget.Get('slider');

        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const GETSliderYouTobe = async (q) => {
    try {
        const res = await APIget.Get('YoutobeList');

        return res.data;
    } catch (err) {
        console.log(err);
    }
};
