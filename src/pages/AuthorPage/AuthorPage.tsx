import Header from "../../layouts/Header/Header";
import style from "./AuthorPage.module.css";

import LeftColAuthor from "./components/LeftColAuthor/LeftColAuthor";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";
import AuthorWorks from "./components/AuthorWorks/AuthorWorks";

import getAuthor from "../../hooks/author/getAuthor";
import reduceAuthorName from "../../utils/reduceAuthorName";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Author } from "../../interfaces/Book";

export default function AuthorPage() {
    const { authorKey } = useParams()
    const { data, loading, error } = getAuthor(authorKey?.slice(1));
    const [authorData, setAuthorData] = useState<Author>();

    useEffect(() => {
        setAuthorData(data);
    }, [data, error])

    if (loading) return (<div>Carregando</div>)

    if (error) return (<div>Teve um erro em {error}</div>)

    return (
        <>
            <Header />
            <div className={style["container"]}>


                <LeftColAuthor authorPhoto={authorData?.photo} />

                <section className={style["right-section"]}>

                    <h1>{reduceAuthorName(authorData?.personal_name)}</h1>

                    <AuthorDetails authorBirth={authorData?.birth_date} authorDeathDate={authorData?.death_date} />

                    <div className={style["bio-box"]}>
                        <p className={style["bio"]}>
                            {authorData?.bio}
                        </p>
                    </div>

                    <AuthorWorks />



                </section>

            </div>
        </>
    )
}