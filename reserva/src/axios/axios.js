import axios from 'axios';
 
const instance = axios.create({
    baseURL: 'https://localhost:44300',
    headers: {
        'Content-Type': 'application/json'
    }
});
 
export default instance;