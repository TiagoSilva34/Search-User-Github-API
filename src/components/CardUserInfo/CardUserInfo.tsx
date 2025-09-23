import { CardUserInfoProps } from "./types"
import Image from "next/image"

export const CardUserInfo = ({
    user,
}: CardUserInfoProps) => {
    return (
        <div>
            <div>
                <Image src={user?.avatar_url} alt={user?.login} width={180} height={180} priority />

                <div>
                    <h1>{user?.name || ""}</h1>
                    <p>@{user?.login}</p>
                    <p>{user?.bio}</p>
                </div>
            </div>

            <div>
                <span>Seguidores:{" "}</span>
                <span>{user?.following}</span>
            </div>

            <div>
                <span>Seguindo:{" "}</span>
                <span>{user?.followers}</span>
            </div>

            <div>
                <span>Repositórios:{" "}</span>
                <span>{user?.public_repos}</span>
            </div>
            <div>
                <span>Localização:{" "}</span>
                <span>{user?.location}</span>
            </div>
            <div>
                <span>Membro desde:{" "}</span>
                <span>{new Date(user?.created_at).getFullYear() || ""}</span>
            </div>
        </div>
    )
}