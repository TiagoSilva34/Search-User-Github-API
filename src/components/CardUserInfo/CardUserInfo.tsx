import { CardUserInfoProps } from "./types"
import Image from "next/image"
import styles from "./styles.module.css"

export const CardUserInfo = ({
    user,
}: CardUserInfoProps) => {
    return (
        <div>
            <div className={styles.avatar}>
                <Image src={user?.avatar_url} alt={user?.login} width={180} height={180} priority />
            </div>
            <div className={styles.username}>
                <span>{user.name}</span>
                <span>@{user.login}</span>
            </div>
            <div className={styles.bio}>
                <span>{user.bio}</span>
            </div>
            <div className={styles.follow}>
                <span>Seguidores:{" "}</span>
                <span>{user.following}</span>
                <span>-</span>
                <span>Seguindo:{" "}</span>
                <span>{user?.followers}</span>
            </div>

            <div className={styles.repositories}>
                <span>Repositórios públicos:{" "}</span>
                <span>{user?.public_repos}</span>
            </div>
            <div className={styles.member}>
                <span>Membro desde:{" "}</span>
                <span>{new Date(user?.created_at).getFullYear()}</span>
            </div>
            <div className={styles.location}>
                <span>{user?.location}</span>
            </div>
        </div>
    )
}