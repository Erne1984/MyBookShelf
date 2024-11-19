import style from "./UserVisitorActions.module.css";
import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";
import DropdownUserActions from "./components/DropdownUserActions";
import useToggleFollowUser from "../../../../hooks/user/useToggleFollowUser";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../context/AuthContextUser";
import getUserProfile from "../../../../hooks/user/getUserProfile";
import { User } from "../../../../interfaces/Book";

interface Props {
    targetUserId: string;
}

export default function UserVisitorActions({ targetUserId }: Props) {
    const userId = useContext(AuthContext)?.userId;
    const { user } = getUserProfile();
    const [profileData, setProfileData] = useState<User | undefined>();
    const [isFollowing, setIsFollowing] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log(`TargedId: ${targetUserId} idLogged: ${userId}`)
        if (user) {
            setProfileData(user);

            const followingUsersReference = profileData?.followingUsersReference as string[] | undefined;
            if (followingUsersReference) {
                setIsFollowing(followingUsersReference.includes(targetUserId));
            }
        }
    }, [user, targetUserId]);

    const handleToggleFollow = async () => {
        setLoading(true);
        try {
            await useToggleFollowUser(userId!, targetUserId);
            setIsFollowing((prev) => !prev);
        } catch (error) {
            console.error("Erro ao alternar seguir/deixar de seguir:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={style["actions-row-container"]}>
            <div onClick={handleToggleFollow}>
                <PrimaryButton
                    btnContent={loading ? "Processando..." : isFollowing ? "Deixar de Seguir" : "Seguir"}
                />
            </div>
            <DropdownUserActions />
        </div>
    );
}
