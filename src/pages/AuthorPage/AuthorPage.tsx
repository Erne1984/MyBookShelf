import Header from "../../layouts/Header/Header";
import style from "./AuthorPage.module.css";

import LeftColAuthor from "./components/LeftColAuthor/LeftColAuthor";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";
import AuthorWorks from "./components/AuthorWorks/AuthorWorks";

import reduceAuthorName from "../../utils/reduceAuthorName";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Author } from "../../interfaces/Book";
import useGetAuthorById from "../../hooks/author/getAuthorById";
import { AuthContext } from "../../context/AuthContextUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import ModalUpdateAuthor from "../../common/ModalUpdateAuthor/ModalUpdateAuthor";

export default function AuthorPage() {
    const { authorKey } = useParams()
    if (!authorKey) return <></>
    const { author, loading, error } = useGetAuthorById(authorKey);
    const [authorData, setAuthorData] = useState<Author>();
    const [modalShow, setModalShow] = useState<boolean>(false);
    const isAuthenticated = useContext(AuthContext)?.isAuthenticated
    const isModerator = useContext(AuthContext)?.isModerator

    useEffect(() => {
        if (author) {
            setAuthorData(author);
        }
    }, [author, error])

    if (loading) return (<div>Carregando</div>)

    if (error) return (<div>Teve um erro em {error}</div>)

    function toggleModal() {
        setModalShow(!modalShow);
    }

    return (
        <>
            <Header />
            <div className={style["container"]}>

                <LeftColAuthor authorPhoto={authorData?.imageUrl} />

                <section className={style["right-section"]}>

                    <div className={style["box-title"]}>
                        <h1>{reduceAuthorName(authorData?.name)}</h1>

                        {isAuthenticated ? (
                            <>
                                {isModerator && <FontAwesomeIcon className={style["icon"]} icon={faPen} onClick={toggleModal}/>}
                            </>
                        ) :
                            <>
                            </>}
                    </div>

                    <AuthorDetails authorBirth={authorData?.birth_date} authorDeathDate={authorData?.death_date} />

                    <div className={style["bio-box"]}>
                        <p className={style["bio"]}>
                            {authorData?.bio}
                        </p>
                    </div>

                    <AuthorWorks />

                </section>

                <ModalUpdateAuthor authorId={authorData?._id} authorBio={authorData?.bio} modalShow={modalShow} onClose={toggleModal} />

            </div>
        </>
    )
}