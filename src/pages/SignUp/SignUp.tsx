import style from "./SignUp.module.css";

import SignUpForm from "./components/SignUpForm/SignUpForm";


export default function SignUp() {

    return(
        <div className={style["container-sign-up"]}>
            <SignUpForm/>
        </div>
    )
}