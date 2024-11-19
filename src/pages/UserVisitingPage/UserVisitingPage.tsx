import style from "./UserVisitingPage.module.css";

import Header from "../../layouts/Header/Header";
import useGetUserById from "../../hooks/user/useGetUserById";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { User } from "../../interfaces/Book";
import UserImg from "../UserPage/components/UserImg/UserImg";
import UserInfo from "../UserPage/components/UserInfo/UserInfo";
import UserReviewRating from "../UserPage/components/UserReviewRatings/UserReviewRatings";
import UserFriends from "../UserPage/components/UserFriends/UserFriends";
import UserBio from "../UserPage/components/UserBio/UserBio";
import UserStatsRow from "../UserPage/components/UserStatsRow/UserStatsRow";
import UserShelves from "../UserPage/components/UserShelves/UserShelves";
import UserCurrentlyReading from "../UserPage/components/UserCurrentlyReading/UserCurrentlyReading";

export default function UserVisitingPage() {
    const {userId} = useParams()
    if (!userId) return <p>userId não recebido</p>;

    const [profileData, setProfileData] = useState<User | undefined>();
    const { user, loading, error } = useGetUserById(userId);

    useEffect(() => {
        if(user){
            setProfileData(user);
        }
    }, [user])

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
    if (!profileData) return <p>Usuário não encontrado</p>;

    return (
        <>
            <Header />

            <div className={style["UserPage-visiting-container"]}>

            <div className={style["left-col-user"]}>
                    <UserImg userAvatar={profileData.imgUserUrl} />
                    <UserInfo userId={profileData._id} createdAt={profileData.creationDate} country={profileData.country} dateBirth={profileData.dateBirth} gender={profileData.gender} />
                    <UserReviewRating userRatings={profileData.reviews.length} userReviews={profileData.ratingsReference.length}/>
                    <UserFriends/>
                </div>
                <main className={style["right-col-user"]}>
                    <UserBio userId={profileData._id} userName={profileData.username} userBio={profileData.aboutMe}/>
                    <UserStatsRow userReaded={profileData.readedList.length} userReading={profileData.readingList.length} userToRead={profileData.toReadList.length}/>
                    <UserCurrentlyReading toReadList={profileData.toReadList}/>
                    <UserShelves userId={profileData._id} readingList={profileData.readingList} readedList={profileData.readedList} toReadList={profileData.toReadList}/>
                </main>

            </div>
        </>
    )
}