import { useEffect, useState } from "react";
import getAuthorWorks from "../../../../hooks/author/getAuthorWorks";
import style from "./AuthorWorks.module.css";
import Book from "../../../../interfaces/Book";
import ListView from "../../../../common/ListView/ListView";

interface AuthorWorksProps {
    authorId: string | undefined;
}


export default function AuthorWorks(props: AuthorWorksProps) {
    const { data } = getAuthorWorks(props.authorId || "")
    const [works, setWorks] = useState<Book[]>();

    useEffect(() => {
        if (data) {
            setWorks(data);
        }
    }, [data]);

    return (
        <section className={style["container"]}>

            <h2>Obras</h2>

            {
                works &&
                <ListView books={works} />
            }

        </section>
    )
}