import {useMutation, useQuery } from 'react-query';
import axiosInstance from 'Axios/AxiosInstance'

const userId = localStorage.getItem("UserId")


const AddOtpData = (otpData:any) => {
    return axiosInstance.post(`auth/verify-otp/${userId}`,otpData)
   }
 
   const useOtpData = () => {
    return useMutation(AddOtpData)
   }

export default useOtpData 