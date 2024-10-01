import './BookCard.css';

import RantingStars from '../RantingStars/RatingStars';

interface BookCardProps {
    BookImg: string | undefined,
    BookTitle: string,
    BookAuthor: string,
    BookRanting: number,
    BookScore: number
}

export default function BookCard(props: BookCardProps) {

    return (
        <div className='book-card'>

            <div className='book-cover-box'>
                <img src={props.BookImg}></img>
            </div>


            <div className='book-info'>

                <h3>{props.BookTitle}</h3>
                <small>{props.BookAuthor}</small>
                <RantingStars editable={false} score={props.BookScore} />

            </div>

        </div>
    )
}