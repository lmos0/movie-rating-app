import axios from "axios";

const API_BASE_URL = 'http://localhost:3000/api'

const api = axios.create({
    baseURL: API_BASE_URL
})

export const fetchMovies = async () => {
    const response = await api.get('/movies')
    return response.data
}

export const createRating = async (movieId:number, score:number, comment: string) => {
    const response = await api.post('/ratings', {movieId, score, comment})
    return response.data
}

export const fetchUserRatings = async (userId:string) => {
    const response = await api.get(`/ratings?userId=${userId}`)
    return response.data
}

// User

export const registerUser = async(name:string, email:string, password:string) => {
    const response = await api.post('/users', {name, email, password})
    response.data
}

export const loginUser = async(email:string, password:string) => {
    const response = await api.post('/login', {email, password})
    return response.data
}