import style from "./LeftColAuthor.module.css";
import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";
import WriteIcon from "/assets/writer.png"

interface LeftColAuthorProps {
    authorPhoto: string | undefined,
}

export default function LeftColAuthor(props: LeftColAuthorProps) {

    return (
        <aside className={style["left-section"]}>

            <div className={style["portrait-box"]}>

                {
                    props.authorPhoto ?
                    <img src={props.authorPhoto} alt="Foto do autor " />
                    :
                    <img src={WriteIcon} alt="Foto do autor " />
                }
            </div>

            <div className={style["btn-box"]}>
                <PrimaryButton btnContent="Favoritar" />
            </div>

        </aside>
    )
}