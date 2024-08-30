import './RantingStars.css';

import ReactStars from 'react-stars'

interface RantingStarsProps {
    score: number,
    editable?: boolean
}

export default function RantingStars(props: RantingStarsProps) {

    return (

        <ReactStars
            count={5}
            value={props.score}
            size={24}
            color2={'#ffd700'}
            edit={props.editable !== false}
        />

    )
}