import axios from "axios"

const config = {
    baseURL: "https://api.github.com",
    timeout: Number(process.env.AXIOS_TIMEOUT) ?? 1000,
}

export function handleApiConfig() {
    return axios.create(config)
}
