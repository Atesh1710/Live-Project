import axios from "axios";
const BASE_URL='https://newsapi.org/v2'
const API_KEY='9fdcf4bba00441d5987f148c2ead0e12'

export const getAllNews=(topic)=>{
    //https://newsapi.org/v2/everything?q=tesla&from=2024-01-20&sortBy=publishedAt&apiKey=API_KEY
    return axios.get(`${BASE_URL}/everything?q=${topic}&apiKey=${API_KEY}`)
}
export const getTopHeadLines=()=>{
    //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=API_KEY  
    return axios.get(`${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}  `)
}