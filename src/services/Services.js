import * as request from '@/utils/httpRequest';

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
