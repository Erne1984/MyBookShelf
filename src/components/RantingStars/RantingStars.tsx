import './RantingStars.css';

import ReactStars from 'react-stars'


export default function RantingStars() {

    const ratingChanged = (newRating: number) => {
        console.log(newRating)
    }

    return (

        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />

    )
}