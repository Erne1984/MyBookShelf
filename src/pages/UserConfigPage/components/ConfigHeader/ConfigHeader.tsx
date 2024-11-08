import style from "./ConfigHeader.module.css";

export default function ConfigHeader() {

    return (
        <div className={style["config-header"]}>
            <h2>Configurações</h2>
            <p>Voltar</p>
        </div>
    )
}