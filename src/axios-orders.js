import axios from 'axios';

const instance = axios.create({
    baseURL:'https://wincacademydatabase.firebaseio.com/martijn.json'
});

export default instance;