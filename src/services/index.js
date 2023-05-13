import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3010',
    timeout: 20000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json',
        // eslint-disable-next-line prettier/prettier
        'Authorization':
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc4NmExNTk4LWQ5OGEtNDNkMy04YTlmLWRiZmNlZDBkN2MyYSIsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODM2OTIwOTQsImV4cCI6MzY4MzY5MjA5NH0.5vQrGRAC_NnwVGvUHx0bcpFO3TR8Le_gqm_7VM7DN2o'
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
