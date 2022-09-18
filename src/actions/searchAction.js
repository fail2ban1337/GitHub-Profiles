import axios from "axios";
require('dotenv').config();


const githubApi = axios.create({
    baseURL: "https://api.github.com/users/",
    headers:{
        'Authorization':`Bearer `
    }

})

export const  searchByUserName  = async ({queryKey}) => {
try {

    const response = await githubApi.get(`${queryKey[1]}/repos?sort=updated`);
    const result = await githubApi.get(`${queryKey[1]}`);
    return {response, result};
    
} catch (error) {
    console.log(error);
}
}

export const searchUserDetails = async  ({queryKey}) => {
    try {
    const response = await githubApi.get(`${queryKey[1]}/repos?sort=updated`);
    return response;
    } catch (error) {
        console.log(error);
    }
}