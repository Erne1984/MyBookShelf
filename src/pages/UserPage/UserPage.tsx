import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextUser";
import getUserProfile from "../../hooks/getUserProfile";
import { User } from "../../interfaces/Book";

import Header from "../../layouts/Header/Header";
import UserImg from "./components/UserImg/UserImg";
import UserInfo from "./components/UserInfo/UserInfo";
import UserReviewRating from "./components/UserReviewRatings/UserReviewRatings";
import UserFriends from "./components/UserFriends/UserFriends";
import style from "./UserPage.module.css";

export default function UserPage() {

    const { user, loading, error } = getUserProfile();
    const isAuthenticated  = useContext(AuthContext)?.isAuthenticated;
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
            <div className={style["UserPage-container"]}>
                <div className={style["left-col-user"]}>
                    <UserImg userAvatar={profileData.imgUserUrl} />
                    <UserInfo createdAt={profileData.creationDate} country={profileData.country} dateBirth={profileData.dateBirth} gender={profileData.gender} />
                    <UserReviewRating userRatings={profileData.reviews.length} userReviews={profileData.ratingsReference.length}/>
                    <UserFriends/>
                </div>
                <main>
                    
                </main>
            </div>
        </>
    );
}
