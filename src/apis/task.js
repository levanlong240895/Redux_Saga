import axiosService from './../commons/axiosService';
import  { API_ENDPOINT } from './../constants/index';

// http://localhost:3000
const url = 'tasks';

// const axiosService = new AxiosService();

export const getListTask = () => {
    return axiosService.get(`${API_ENDPOINT}/${url}`);
};