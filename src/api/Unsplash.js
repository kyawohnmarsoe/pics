import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID fXoQguZe2FUgCdOwaKchoEmGX2VLK-x-5PJO1LNwp1E'
       }
})