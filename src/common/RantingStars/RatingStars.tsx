import './RatingStars.css';
import ReactStars from 'react-stars';

interface RantingStarsProps {
    score: number | undefined;
    editable?: boolean;
    onChange?: (newScore: number) => void | undefined;
}

export default function RantingStars(props: RantingStarsProps) {
    return (
        <ReactStars
            count={5}
            value={props.score}
            size={30}
            color2={'#ffd700'}
            edit={props.editable}
            onChange={props.onChange}
        />
    );
}
