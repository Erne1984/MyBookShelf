import style from "./UserReview.module.css";

import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

import getUserProfile from "../../../../../../hooks/user/getUserProfile";
import { AuthContext } from "../../../../../../context/AuthContextUser";
import { User } from "../../../../../../interfaces/Book";

import PrimaryButton from "../../../../../../common/PrimaryButton/PrimaryButton";
import RantingStars from "../../../../../../common/RantingStars/RatingStars";
import ModalReview from "../../../../../../common/ModalReview/ModalReview";

interface UserReviewProps {
    bookId: string,
}

export default function UserReview(props: UserReviewProps) {
    const { user, loading, error } = getUserProfile();
    const [profileData, setProfileData] = useState<User | undefined>();
    const [showModal, setShowModal] = useState<boolean>(false);
    const isAuthenticated = useContext(AuthContext)?.isAuthenticated;

    useEffect(() => {
        if (user) {
            setProfileData(user);
        }
    }, [user]);

    function toggleModal() {
        setShowModal(!showModal)
    }

    return (
        <article className={style["user-review-container"]}>

            {
                profileData?.imgUserUrl && isAuthenticated ?
                    <img className={style["user-avatar"]} src={profileData.imgUserUrl}></img>
                    :
                    <FontAwesomeIcon className={style["user-avatar"]} icon={faCircleUser} />
            }

            <h3>O que você acha?</h3>

            <div className={style["rating-review-container"]}>
                <RantingStars editable={true} score={0} />

                <div onClick={toggleModal}>
                    <PrimaryButton btnContent="Fazer Review" />
                </div>
            </div>

            <ModalReview userId={profileData?._id} bookId={props.bookId} onClose={toggleModal} modalShow={showModal} bookTitle="O alienista" />


        </article>
    )
}