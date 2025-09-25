import { userService } from "@/services/userService";
import { localStorageHandler } from "@/utils/browser/localStorage";
import { useState } from "react";
import { StorageParams } from "@/utils/storageParams/StorageParams";
export const useUserSearch = () => {
  const [user, setUser] = useState<IUserProps>();
  const [loading, setLoading] = useState(false);

  async function handleSearchUser(username: string) {
    setLoading(true);

    const getUserSearchCache = localStorageHandler.retrieveData(
      StorageParams.GET_USER_SEARCH_CACHE
    )

    const info = getUserSearchCache ? getUserSearchCache.info : [];

    try {
      const user = await userService.getUsers(username);

      const isUserInCache = info.some((item: IUserProps) => item.id === user.id);


      if (!isUserInCache) {
        localStorageHandler.saveData(StorageParams.GET_USER_SEARCH_CACHE, [
          user,
          ...info,
        ]);
      }

      setUser(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(undefined);
    } finally {
      setLoading(false);
    }
  }

  return {
    user,
    loading,
    setUser,
    handleSearchUser,
  };
};
