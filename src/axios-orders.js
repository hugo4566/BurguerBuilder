import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-b4950.firebaseio.com/'
});

export default instance;