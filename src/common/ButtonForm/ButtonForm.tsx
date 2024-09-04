import './ButtonForm.css';

interface ButtonFormProps {
    btnContent: string,
    formMethod: string
}

export default function ButtonForm( props: ButtonFormProps ){

    return(
        <button className='button-form' formMethod={props.formMethod}>

            { props.btnContent }

        </button>
    )
}