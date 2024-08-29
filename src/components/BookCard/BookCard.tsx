import './BookCard.css';

import RantingStars from '../RantingStars/RantingStars';

interface BookCardProps {
    BookImg: string | undefined,
    BookTitle: string,
    BookAuthor: string,
    BookRanting: number
}

export default function BookCard(props: BookCardProps) {

    return (
        <div className='book-card'>
            <img src={props.BookImg}></img>


            <div className='book-info'>

                <h3>{props.BookTitle}</h3>
                <small>{props.BookAuthor}</small>
                <RantingStars />

            </div>

        </div>
    )
}