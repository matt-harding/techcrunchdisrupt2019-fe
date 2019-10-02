import get from './get';
import post from './post';

export default {
    async getTestData(apiPath: string): Promise<any> {
        try {
            const res = await get(apiPath, '/test');
            return res.data;
        } catch (err) {
            throw err;
        }
    },
};
