"use client"
import { useUserSearch } from "@/hooks/useUserSearch";
import { Form } from "../Form/Form"
import { CardUserInfo } from "../CardUserInfo/CardUserInfo";

export const Layout = () => {
    const { handleSearchUser, user, loading } = useUserSearch();

    function handleSearchData(data: string) {
        handleSearchUser(data);
    }

    if (loading) return <p>Carregando...</p>

    return (
        <>
            <Form handleSearchData={handleSearchData} />

            {!user ? (
                <p className="text-center text-gray-500 mt-4">
                    Nenhum usuário pesquisado
                </p>
            ) : (
                <CardUserInfo user={user} />
            )}

        </>
    )
}