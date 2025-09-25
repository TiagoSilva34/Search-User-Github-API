import axios from "axios"

const config = {
    baseURL: process.env.NEXT_PUBLIC_GITHUB_API_URL || "https://api.github.com",
    timeout: Number(process.env.NEXT_PUBLIC_AXIOS_TIMEOUT) ?? 1000,
}

export function handleApiConfig() {
    return axios.create(config)
}
