import './BookCard.css';

import RantingStars from '../RantingStars/RatingStars';
import getBookAverage from '../../hooks/book/getBookAverage';
import { useEffect, useState } from 'react';

interface BookCardProps {
    BookId: string;
    BookImg: string | undefined,
    BookTitle: string,
    BookAuthor: string,
}

export default function BookCard(props: BookCardProps) {
    const {bookAverage} = getBookAverage(props.BookId);
    const [bookScore, setBookScore] = useState<number>();

    useEffect(() => {
        if(bookAverage){
            setBookScore(bookAverage)
        }
    }, [bookAverage])

    return (
        <div className='book-card'>

            <div className='book-cover-box'>
                <img src={props.BookImg}></img>
            </div>


            <div className='book-info'>

                <h3>{props.BookTitle}</h3>
                <small>{props.BookAuthor}</small>
                <RantingStars editable={false} score={bookScore} />

            </div>

        </div>
    )
}