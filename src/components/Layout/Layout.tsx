"use client"
import { useUserSearch } from "@/hooks/useUserSearch";
import { Form } from "../Form/Form"
import { CardUserInfo } from "../CardUserInfo/CardUserInfo";

export const Layout = () => {
    const { handleSearchUser, user, repo } = useUserSearch();

    function handleSearchData(data: string) {
        handleSearchUser(data);
    }

    return (
        <>
            <Form handleSearchData={handleSearchData} />
            <CardUserInfo user={user} repo={repo} />
        </>
    )
}