import axios from 'axios';
import LocalStorageService from "./localStorage";

const apiUrl = "https://localhost:32768/api/";
const localStorageService = LocalStorageService.getService();   
const headersPreset = {'Accept':'application/json'};

export const authInstance = axios.create({baseURL: apiUrl, headers: headersPreset });
export const publicInstance = axios.create({baseURL: apiUrl, headers: headersPreset});

//Request Interceptors
authInstance.interceptors.request.use(
    config => {
        const token = localStorageService.getAccessToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        console.log(JSON.stringify(error));
        Promise.reject(error);
    });
publicInstance.interceptors.request.use(
    error => {
        console.log(JSON.stringify(error));
        Promise.reject(error);
    });
    

//Response Interceptors
authInstance.interceptors.response.use((response) => {
     if( response.data.data !=null && response.data.data.token!=null){
        localStorageService.setAccessToken(response.data.data.token);
        authInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();
    }
    console.log(response);
    return response;
    }, function (error) {
        console.log(error);
        console.log(JSON.stringify(error));
        return Promise.reject(error);
    });

publicInstance.interceptors.response.use((response) => {
    console.log(JSON.stringify(response));
    return response;
    }, function (error) {
        console.log(JSON.stringify(error));
        return Promise.reject(error);
    });