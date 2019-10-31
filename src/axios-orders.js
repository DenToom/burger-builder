import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burgerbuilder-17910.firebaseio.com/'
    
});

export default instance;

// 'https://wincacademydatabase.firebaseio.com/martijn.json'