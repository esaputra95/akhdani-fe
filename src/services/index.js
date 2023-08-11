import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:2023',
    timeout: 20000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
});

const interceptor = () =>
    api.interceptors.response.use(
        (res) => {
            // Add configurations here
            // if (res.status === 201) {
            // }
            return res;
        },
        (err) => {
            return err;
            //  return Promise.reject(err);
        }
    );

export { api, interceptor };
