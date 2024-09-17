import styles from './LeftColBook.module.css';

import PrimaryButton from '../../../../common/PrimaryButton/PrimaryButton';

interface LeftColBookProps {
    bookCover: string | undefined,
}

export default function LeftColBook( props: LeftColBookProps) {

    return(
        <aside>

            <img src={ props.bookCover }></img>

            <div className={ styles["btn-group"]}>

                <PrimaryButton btnContent='Quero Ler'></PrimaryButton>

                <PrimaryButton btnContent='Avaliar'></PrimaryButton>

            </div>

        </aside>
    )
}