import axios from "axios";


const githubApi = axios.create({
    baseURL: "https://api.github.com/users/"
})

export const  searchByUserName  = async (querykey) => {
try {
    const response = await githubApi.get(`${querykey[1]}/repos?sort=updated`);
    return response;
    
} catch (error) {
    console.log(error);
}
}