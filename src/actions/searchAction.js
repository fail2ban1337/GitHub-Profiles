import axios from "axios";


const githubApi = axios.create({
    baseURL: "https://api.github.com/users/",
    headers:{
        'Authorization':`Bearer ${process.env.REACT_APP_GITHUB_APP_KEY}`
    }

})

export const  searchByUserName  = async ({queryKey}) => {

    const response = await githubApi.get(`${queryKey[1]}/repos?sort=updated`);
    const result = await githubApi.get(`${queryKey[1]}`);
    return {response, result};
}

export const searchUserDetails = async  ({queryKey}) => {
    try {
    const response = await githubApi.get(`${queryKey[1]}/repos?sort=updated`);
    return response;
    } catch (error) {
        return error;

    }
}