import style from "./UserReview.module.css";
import { useEffect, useState } from "react";
import getUserProfile from "../../../../../../hooks/user/getUserProfile";
import { User } from "../../../../../../interfaces/Book";
import WriteReview from "./components/WriteReview/WriteReview";
import MyReview from "./components/MyReview/MyReview";
import useGetUserReview from "../../../../../../hooks/review/useGetUserReview";

interface UserReviewProps {
    bookId: string,
    bookTitle: string,
}

export default function UserReview(props: UserReviewProps) {
    const { user, loading, error } = getUserProfile();
    const [profileData, setProfileData] = useState<User | undefined>();

    const { data: userReviewData, loading: reviewLoading, error: reviewError } = useGetUserReview(props.bookId, profileData?._id || "");

    useEffect(() => {
        if (user && !error) {
            setProfileData(user);
        }
    }, [user]);

    return (
        <article className={style["user-review-container"]}>

            {
                userReviewData ?
                    <MyReview bookId={props.bookId} bookTitle={props.bookTitle} content={userReviewData.content} createdAt={userReviewData.createdAt} />
                    :
                    <WriteReview _id={profileData?._id} bookId={props.bookId} imgUserUrl={profileData?.imgUserUrl} />
            }
        </article>
    )
}