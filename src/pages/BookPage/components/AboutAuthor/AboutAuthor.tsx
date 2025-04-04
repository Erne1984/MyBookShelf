import { useEffect, useState } from "react";
import style from "./AboutAuthor.module.css";
import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import getAuthor from "../../../../hooks/author/getAuthor";
import { Author } from "../../../../interfaces/Book";
import formatName from "../../../../utils/formatName";
import { Link } from "react-router-dom";

interface AboutAuthorProps {
    authorKey: string | null;
}

export default function AboutAuthor(props: AboutAuthorProps) {

    if (!props.authorKey) return <img></img>

    const { data, loading, error } = getAuthor(props.authorKey);

    const [authorData, setAuthorData] = useState<Author>();
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        setAuthorData(data);
    }, [data, error]);

    if (loading) return <p>Carregando...</p>;
    if (!authorData) return <p>Erro em buscar dados do autor</p>;

    return (
        <section className={style.container}>
            <h2>Sobre o Autor</h2>
            <div className={style["author-profile"]}>
                <div className={style["box-name-photo"]}>
                    <div className={style["box-img"]}>
                        <img src={authorData.imageUrl} alt="" />
                    </div>
                    <Link to={`/author/${authorData._id}`}>
                        <h4 className={style["author-name"]}>{formatName(authorData.name)}</h4>
                    </Link>
                </div>
                <PrimaryButton btnContent="Favoritar" />
            </div>

            <div className={style["author-bio-container"]}>
                <p className={`${style["author-bio"]} ${isExpanded ? style.expanded : style.collapsed}`}>
                    {authorData.bio}
                </p>
            </div>

            <div className={style["btn-expanded"]} onClick={() => setIsExpanded(!isExpanded)}>
                <span>
                    {isExpanded ? "Ver menos" : "Ver mais"}
                </span>

                {isExpanded ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
            </div>

        </section>
    );
}

