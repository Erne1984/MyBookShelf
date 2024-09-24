import style from './GenreRow.module.css';
import { useState } from 'react';

interface GenreRowProps {
    bookGenres: string[];
}

export default function GenreRow(props: GenreRowProps) {
    const [genreLimit, setGenreLimit] = useState(4);

    let genresToShow: string[] = [];

    if (props.bookGenres) {
        genresToShow = props.bookGenres.slice(0, genreLimit);
    }

    const handleLoadMore = () => {
        setGenreLimit((prev) => prev + 4);
    };

    return (
        <div className={style.container}>
            <div className={style['genre-highlight']}>Gêneros: </div>

            <div className={style['genre-box']}>
                {genresToShow.length > 0 ? (
                    genresToShow.map((genre) => {
                        return (
                            <div className={style.genre} key={genre}>
                                {genre}
                            </div>
                        );
                    })
                )
                    :
                    (
                        <div className={style.genre}>drama</div>
                    )}
                <div className={style.more} onClick={handleLoadMore}>
                    ...Mais
                </div>
            </div>
        </div>
    );
}
