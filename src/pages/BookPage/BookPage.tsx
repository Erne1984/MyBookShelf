import { useParams } from "react-router-dom";
import styles from "./BookPage.module.css";
import Header from "../../layouts/Header/Header";

export default function BookPage() {

    const { bookISBN } = useParams();

    return (
        <>

            <Header/>

            <div className={styles["container-page-book"]}>

                <div className="">

                </div>

                <h1>Book ID: {bookISBN}</h1>

            </div>
        </>
    )
}