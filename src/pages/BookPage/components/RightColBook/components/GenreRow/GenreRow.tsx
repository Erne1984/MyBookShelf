import style from './GenreRow.module.css';
import { Subject } from '../../../../../../interfaces/Book';
import { useState } from 'react';

interface GenreRowProps {
    bookGenres: Subject[];
}

export default function GenreRow(props: GenreRowProps) {
    const [genreLimit, setGenreLimit] = useState(4);


    const genresToShow = props.bookGenres.slice(0, genreLimit);

    const handleLoadMore = () => {
        setGenreLimit(prev => prev + 4);
    }

    return (
        <div className={style.container}>

            <div className={style["genre-highlight"]}>Genêros: </div>

            <div className={style["genre-box"]}>

                {
                    genresToShow.map((genre) => {
                        return (
                            <div className={style.genre}>
                                {genre.name}


                            </div>
                        )
                    })
                }
                <div className={style.more} onClick={handleLoadMore}>...Mais</div>

            </div>

        </div>
    )
}