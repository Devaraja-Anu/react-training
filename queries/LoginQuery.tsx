import {useMutation, useQuery } from 'react-query';
import axiosInstance from 'Axios/AxiosInstance'


  const addLoginData = (details:any) => {
    return axiosInstance.post('/auth/login',details)
 }

  
    const useAddLoginData = () => {
    return useMutation(addLoginData )   
   }

   export default useAddLoginData