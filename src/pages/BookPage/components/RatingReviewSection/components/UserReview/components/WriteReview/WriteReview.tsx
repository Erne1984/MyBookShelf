import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./WriteReview.module.css";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import RantingStars from "../../../../../../../../common/RantingStars/RatingStars";
import PrimaryButton from "../../../../../../../../common/PrimaryButton/PrimaryButton";
import ModalReview from "../../../../../../../../common/ModalReview/ModalReview";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../../../../context/AuthContextUser";
import { Link } from "react-router-dom";

interface WriteReviewProps {
    _id: string | undefined,
    bookId: string,
    imgUserUrl: string | undefined,
}

export default function WriteReview(props: WriteReviewProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const isAuthenticated = useContext(AuthContext)?.isAuthenticated;

    function toggleModal() {
        setShowModal(!showModal)
    }

    return (
        <article className={style["user-review-container"]}>

            {
                props?.imgUserUrl && isAuthenticated ?
                    <img className={style["user-avatar"]} src={props.imgUserUrl}></img>
                    :
                    <FontAwesomeIcon className={style["user-avatar"]} icon={faCircleUser} />
            }

            <h3>O que você acha?</h3>

            {
                isAuthenticated ?
                    <div className={style["rating-review-container"]}>
                        <RantingStars editable={true} score={0} />

                        <div onClick={toggleModal}>
                            <PrimaryButton btnContent="Fazer Review" />
                        </div>
                    </div>
                    :
                    <div className={style["rating-review-container"]}>
                        <RantingStars editable={true} score={0} />

                        <Link to={"/login"}>
                                <PrimaryButton btnContent="Fazer Review" />
                        </Link>
                    </div>
            }

            <ModalReview userId={props?._id} bookId={props.bookId} onClose={toggleModal} modalShow={showModal} bookTitle="O alienista" />


        </article>
    )
}