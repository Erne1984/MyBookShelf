import { useState } from "react";
import style from "./AboutAuthor.module.css";
import PrimaryButton from "../../../../../../common/PrimaryButton/PrimaryButton";
import { transliterate } from "transliteration";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface AboutAuthorProps {
    name: string,
    img: string | undefined,
    authorBio: string,
}

export default function AboutAuthor(props: AboutAuthorProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    function formatName() {
        const formatedText = props.name.split(" ");
        if (formatedText.length > 2) {
            formatedText.splice(1, 1);
        }
        return transliterate(formatedText.toString().replace(",", " "));
    }

    return (
        <section className={style.container}>
            <h2>Sobre o Autor</h2>
            <div className={style["author-profile"]}>
                <div className={style["box-name-photo"]}>
                    <div className={style["box-img"]}>
                        <img src={props.img} alt="" />
                    </div>
                    <h4 className={style["author-name"]}>{formatName()}</h4>
                </div>
                <PrimaryButton btnContent="Favoritar" />
            </div>

            <p className={`${style["author-bio"]} ${isExpanded ? style.expanded : style.collapsed}`}>
                {props.authorBio}
            </p>

            <div className={style["btn-expanded"]} onClick={() => setIsExpanded(!isExpanded)}>
                <span>
                    {isExpanded ? "Ver menos" : "Ver mais"}
                </span>

                { isExpanded ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} /> }
            </div>

        </section>
    );
}
