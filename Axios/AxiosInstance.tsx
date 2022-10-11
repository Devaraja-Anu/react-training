import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: "https://api.elearning.alpha.logidots.com/api",
});

let token;

if(typeof window !== 'undefined'){
     token = localStorage.getItem('token');
     console.log(token , 'the token');
}

axiosInstance.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
axiosInstance.defaults.headers.common['X-App-Type'] = 'learner';

export default axiosInstance