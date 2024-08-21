import './BookCard.css';

import RantingStars from '../RantingStars/RantingStars';

interface BookCardProps {
    BookImg: string,
    BookTitle: string,
    BookAuthor: string,
    BookRanting: number
}

export default function BookCard(props: BookCardProps) {

    return (
        <div>
            <img src={props.BookImg}></img>

            <h3>{props.BookTitle}</h3>

            <small>{props.BookAuthor}</small>

            <RantingStars/>

        </div>
    )
}