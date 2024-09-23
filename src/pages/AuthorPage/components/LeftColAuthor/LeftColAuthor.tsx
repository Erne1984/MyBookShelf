import style from "./LeftColAuthor.module.css";
import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";

interface LeftColAuthorProps {
    authorPhoto: string | undefined,
}

export default function LeftColAuthor(props: LeftColAuthorProps) {

    if (!props.authorPhoto) return (<p>Imagem não encontrado</p>)

    return (
        <aside className={style["left-section"]}>

            <div className={style["portrait-box"]}>
                <img src={props.authorPhoto} alt="Foto do autor " />
            </div>

            <div className={style["btn-box"]}>
                <PrimaryButton btnContent="Favoritar" />
            </div>

        </aside>
    )
}