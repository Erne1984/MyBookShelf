import style from "./UserConfigForm.module.css";
import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";

export default function UserConfigForm() {

    return (
        <form className={style["form-config"]}>
            <h4>Geral</h4>

            <div className={style["input-box"]}>
                <label>username</label>
                <input type="text"></input>
            </div>

            <div className={style["input-box"]}>
                <label>nome verdadeiro</label>
                <input type="text"></input>
            </div>

            <h4>Informações</h4>

            <div className={style["input-box"]}>
                <label>País</label>
                <input type=""></input>
            </div>

            <div className={style["input-box"]}>
                <label>Cidade</label>
                <input type=""></input>
            </div>

            <h4>Bio</h4>

            <div className={style["input-box"]}>
                <textarea rows={12}></textarea>

                <PrimaryButton btnContent="Salvar Alterações" />
            </div>
        </form>
    )
}