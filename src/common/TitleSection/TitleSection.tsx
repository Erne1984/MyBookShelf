import './TitleSection.css';


interface TitleSectionProps {
    titleContent: string,
}

export default function TitleSection(props: TitleSectionProps) {

    return (
        <div className='title-section-container'>

            <h2> {props.titleContent} </h2>

            <small>Ver mais</small>

        </div>
    )
}