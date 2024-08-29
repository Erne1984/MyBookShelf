import './PrimaryButton.css';

interface PrimaryButtonProps{
    btnContent: string,
}

export default function PrimaryButton( props: PrimaryButtonProps ){

    return(
        <button className='primary-button'>
            { props.btnContent }
        </button>
    )
}