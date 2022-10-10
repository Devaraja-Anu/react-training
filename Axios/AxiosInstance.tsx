import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: "https://api.elearning.alpha.logidots.com/api",
});

let token;

if(typeof window !== 'undefined'){
     token = localStorage.getItem('bearer_token');
}

axiosInstance.defaults.headers.common['Authorization'] = token ? token : '';
axiosInstance.defaults.headers.common['X-App-Type'] = 'learner';

export default axiosInstance