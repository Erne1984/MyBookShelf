import style from './BookCardList.module.css';

import RantingStars from '../RantingStars/RatingStars';

interface BookCardProps {
    BookImg: string | undefined,
    BookTitle: string,
    BookAuthor: string,
    BookRanting: number,
    BookScore: number
}

export default function BookCardList(props: BookCardProps) {

    return (
        <div className={style["book-card-list"]}>

            <div className={style["book-cover-box"]}>
                <img src={props.BookImg}></img>
            </div>


            <div className={style["book-info"]}>

                <h3>{props.BookTitle}</h3>
                <small>{props.BookAuthor}</small>
                <RantingStars editable={false} score={props.BookScore} />

            </div>

        </div>
    )
}