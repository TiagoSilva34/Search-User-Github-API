import { userService } from "@/services/userService";
import { useState } from "react";

export const useUserSearch = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)


    async function handleSearchUser(username: string) {
        setLoading(true)

        try {
            const user = await userService.getUsers(username)

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