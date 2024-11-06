import style from "./UserCurrentlyReading.module.css";
import ListView from "../../../../common/ListView/ListView";
import useGetBooksByIds from '../../../../hooks/book/useGetBooksByIds';

interface UserCurrentlyReadingProps {
    toReadList: string[],
}

export default function UserCurrentlyReading(props: UserCurrentlyReadingProps) {
    const { books, loading, error } = useGetBooksByIds(props.toReadList);

    return (
        <section className={style["currently-reading-container"]}>
            <h2>Lendo Atualmente</h2>

            {loading && <div>Carregando livros...</div>}
            {error && <div>Erro: {error}</div>}
            
            {
                books.length > 0 ? (
                    <ListView books={books} />
                ) : (
                    <div>Nenhum Livro Adicionado</div>
                )
            }
        </section>
    );
}