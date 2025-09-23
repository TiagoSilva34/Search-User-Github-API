import { handleApiConfig } from "./apiConfig";

class UserService{
    private apiUser
    private endpoint = ''

    constructor() {
        this.apiUser = handleApiConfig()
    }

    async getUsers(username: string){
        this.endpoint = `/users/${username}`

        try {
            const { data } = await this.apiUser.get(this.endpoint)

            return data
        } catch (error) {
            console.error('Error fetching users:', error)
            throw error
        }
    }

    async getUserRepos(username: string){
        this.endpoint = `/users/${username}/repos?sort=updated&per_page=5`

        try {
            const { data } = await this.apiUser.get(this.endpoint)

            return data
        } catch (error) {
            console.error('Error fetching repos:', error)
            throw error
        }
    }

    async getRepoCommits(username: string, repoName: string) {
        this.endpoint = `/repos/${username}/${repoName}/commits?per_page=100`

        try {
            const { data } = await this.apiUser.get(this.endpoint)

            return data
        } catch (error) {
            console.error('Error fetching repos:', error)
            throw error
        }
    }
}

export const userService =  new UserService()