"use client";
import { useUserSearch } from "@/hooks/useUserSearch";
import { Form } from "../Form/Form";
import { CardUserInfo } from "../CardUserInfo/CardUserInfo";
import { HistorySearch } from "../HistorySearch/HistorySearch";
import { useState } from "react";
import { localStorageHandler } from "@/utils/browser/localStorage";
import { StorageParams } from "@/utils/storageParams/StorageParams";

export const Layout = () => {
  const { handleSearchUser, user, loading, setUser } = useUserSearch();
  const [userSearchCache, setUserSearchCache] = useState<IUserProps[]>([]);
  const [showModal, setShowModal] = useState(false)

  function handleSearchData(data: string) {
    const validateString = data.replace("@", "").trim()
    handleSearchUser(validateString);
  }

  function handleUserSearchCache() {
    const getUserSearchCache = localStorageHandler.retrieveData(
      StorageParams.GET_USER_SEARCH_CACHE
    );

    if (getUserSearchCache) {
      setUserSearchCache(getUserSearchCache.info);
      setShowModal(true)
    }
  }

  function handleRenderUserSearch(data: IUserProps) {
    if (data) {
        setUser(data)
        setShowModal(false)
    }
  }

  if (loading) return <p>Carregando...</p>;

  return (
    <>
      <Form handleSearchData={handleSearchData} />
      {user && (
        <div>
          <HistorySearch
            handleUserSearchCache={handleUserSearchCache}
            userSearchCache={userSearchCache}
            handleRenderUserSearch={handleRenderUserSearch}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
      )}
      {!user ? (
        <p className="text-center text-gray-500 mt-4">
          Nenhum usuário pesquisado
        </p>
      ) : (
        <CardUserInfo user={user} />
      )}
    </>
  );
};
