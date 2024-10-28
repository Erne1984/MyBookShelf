import styles from './LeftColBook.module.css';

import PrimaryButton from '../../../../common/PrimaryButton/PrimaryButton';
import ModalAddList from '../../../../common/ModalAddList/ModalAddList';
import useGetUserReadingStatus from '../../../../hooks/user/useGetUserReadingStatus';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

interface LeftColBookProps {
    bookId: string,
    userId: string,
    bookCover: string | undefined,
}

export default function LeftColBook(props: LeftColBookProps) {
    const [modal, setModal] = useState<boolean>(false);
    const { data } = useGetUserReadingStatus(props.bookId, props.userId);
    const [status, setStatus] = useState<string>("");

    function toogleModal() {
        setModal(!modal);
    }

    useEffect(() => {
        if (props.userId && data) {
            setStatus(data);
            console.log(status)
        }
    }, [data, props.userId])

    return (
        <aside>

            <img src={props.bookCover}></img>

            <div className={styles["btn-group"]}>

                {
                    status && status != "Not found"
                        ?
                        <div onClick={toogleModal}>
                            <button className={styles["active-button"]}> <FontAwesomeIcon className={styles["icon"]} icon={faPen} />{status}</button>
                        </div>
                        :
                        <div onClick={toogleModal}>
                            <PrimaryButton btnContent='Quero Ler'></PrimaryButton>
                        </div>
                }

                <PrimaryButton btnContent='Avaliar'></PrimaryButton>

            </div>

            <ModalAddList userId={props.userId} bookId={props.bookId} status={status} modalShow={modal} onClose={toogleModal} />

        </aside>
    )
}