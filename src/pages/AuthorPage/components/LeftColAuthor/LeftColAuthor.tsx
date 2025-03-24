import style from "./LeftColAuthor.module.css";
import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";
import WriteIcon from "/assets/writer.png"
import { useState } from "react";

interface LeftColAuthorProps {
    authorPhoto: string | undefined,
}

export default function LeftColAuthor(props: LeftColAuthorProps) {
    const [follow, setFollow] = useState<boolean>(false);

    function handleFollow() {
        setFollow((prevFollow) => !prevFollow);
    }

    return (
        <aside className={style["left-section"]}>

            <div className={style["portrait-box"]}>

                {
                    props.authorPhoto ?
                        <img src={props.authorPhoto} alt="Foto do autor " />
                        :
                        <img src={WriteIcon} className={style["icon"]} alt="Foto do autor " />
                }
            </div>

            <div className={style["btn-box"]}>
                {
                    follow ?
                        <div onClick={handleFollow}>
                            <PrimaryButton btnContent="Seguindo" />
                        </div>
                        :
                        <div onClick={handleFollow}>
                            <PrimaryButton btnContent="Seguir" />
                        </div>
                }
            </div>

        </aside>
    )
}