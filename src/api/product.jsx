import {authInstance,publicInstance} from './axiosApi';
export async function GetProducts(){
        return await publicInstance.get('/Product/Get');
}