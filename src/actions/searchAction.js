import axios from "axios";


const githubApi = axios.create({
    baseURL: "https://api.github.com/users/",
    headers:{
        'Authorization':`Bearer ${process.env.REACT_APP_GITHUB_APP_KEY}`
    }

})

export const  searchByUserName  = async ({queryKey}) => {
try {

    const reporesponse = await githubApi.get(`${queryKey[1]}/repos?sort=updated`);
    const result = await githubApi.get(`${queryKey[1]}`);
    const response = reporesponse.data.splice(0,6);
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