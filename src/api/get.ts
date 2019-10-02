import Axios from 'axios';

export default function(apiPath: string, urlPath: string) {
    return Axios({
        url: apiPath + urlPath,
        method: 'get'
    })
    .then((res: any) => {
        return res;
    },
        (err: any) => {
            // tslint:disable-next-line:no-console
            console.error(err);
            throw err;
    });
}
