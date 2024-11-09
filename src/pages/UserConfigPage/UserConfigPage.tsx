import style from "./UserConfigPage.module.css";

import Header from "../../layouts/Header/Header";
import ConfigHeader from "./components/ConfigHeader/ConfigHeader";
import UserConfigForm from "./components/UserConfigForm/UserConfigForm";
import getUserProfile from "../../hooks/user/getUserProfile";
import ConfigUserAvatar from "./components/ConfigUserAvatar/ConfigUserAvatar";
import { AuthContext } from "../../context/AuthContextUser";
import { useContext, useEffect, useState } from "react";
import { User } from "../../interfaces/Book";
import { useNavigate } from "react-router-dom";

export default function UserConfigPage() {
    const { user, loading, error } = getUserProfile();
    const isAuthenticated = useContext(AuthContext)?.isAuthenticated;
    const [profileData, setProfileData] = useState<User | undefined>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (user) {
            setProfileData(user);
        }
    }, [user]);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!profileData) return <p>Usuário não encontrado</p>;

    return (
        <>
            <Header />

            <main className={style["container-user-config"]}>
                <ConfigHeader />

                <div className={style["main-container-config"]}>
                    <UserConfigForm />

                    <ConfigUserAvatar userAvatar={profileData.imgUserUrl}/>
                </div>
            </main>
        </>
    )
}