import { handleApiConfig } from "./apiConfig";

class UserService{
    private endpoint = ''

    async getUsers(username: string){
        this.endpoint = `/users/${username}`

        try {
            const { data } = await handleApiConfig().get(this.endpoint)

            return data
        } catch (error) {
            console.error('Error fetching users:', error)
            throw error
        }
    }
}

export const userService =  new UserService()