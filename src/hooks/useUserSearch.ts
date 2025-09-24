import { userService } from "@/services/userService";
import { localStorageHandler } from "@/utils/browser/localStorage";
import { useState } from "react";

export const useUserSearch = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)


    async function handleSearchUser(username: string) {
        setLoading(true)
        const getSearcUserCache = localStorageHandler.retrieveDataFromStorage('@getSearcUserCache')
        try {
            if (getSearcUserCache && username === getSearcUserCache) return getSearcUserCache

            const user = await userService.getUsers(username)

            if (getSearcUserCache !== user) {
                localStorageHandler.saveDataInStorage('@getSearcUserCache', [user])
            }

            setUser(user)
        } catch(error) {
            console.error("Error fetching user data:", error)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    return {
        user, 
        loading,
        setUser,
        handleSearchUser
    }
}