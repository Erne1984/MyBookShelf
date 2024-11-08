import style from "./UserConfigPage.module.css";

import Header from "../../layouts/Header/Header";
import ConfigHeader from "./components/ConfigHeader/ConfigHeader";
import UserConfigForm from "./components/UserConfigForm/UserConfigForm";

export default function UserConfigPage() {

    return (
        <>
            <Header />

            <main className={style["container-user-config"]}>
                <ConfigHeader/>

                <UserConfigForm/>
            </main>
        </>
    )
}