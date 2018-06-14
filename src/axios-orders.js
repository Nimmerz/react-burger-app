import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://react-my-burger-a90b4.firebaseio.com/'
});

export default instance;

