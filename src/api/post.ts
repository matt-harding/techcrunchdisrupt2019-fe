import Axios from 'axios';

export default function(apiPath: string, urlPath: string, data: string) {
  return Axios({
    url: apiPath + urlPath,
    method: 'post',
    data,
    auth: {
      username: 'neo4j',
      password: 'techcrunch'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.data,
      (err) => {
        // tslint:disable-next-line:no-console
        console.error(err);
        throw err;
      });
}
