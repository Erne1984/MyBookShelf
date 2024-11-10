import styles from './LeftColBook.module.css';

import PrimaryButton from '../../../../common/PrimaryButton/PrimaryButton';
import ModalAddList from '../../../../common/ModalAddList/ModalAddList';
import ModalCreateList from '../../../../common/ModalCreateList/ModalCreateList';
import useGetUserReadingStatus from '../../../../hooks/user/useGetUserReadingStatus';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

interface LeftColBookProps {
    bookId: string;
    userId: string | null;
    bookCover: string | undefined;
}

export default function LeftColBook(props: LeftColBookProps) {
    const [modalAddList, setModalAddList] = useState<boolean>(false);
    const [modalCreateList, setModalCreateList] = useState<boolean>(false);
    const { data } = useGetUserReadingStatus(props.bookId, props.userId);
    const [status, setStatus] = useState<string>("");

    function toggleModalAddList() {
        setModalAddList(!modalAddList);
    }

    function openCreateListModal() {
        setModalAddList(false);
        setModalCreateList(true);
    }

    function closeCreateListModal() {
        setModalCreateList(false);
    }

    function openAddListModal() {
        setModalCreateList(false);
        setModalAddList(true);
    }

    useEffect(() => {
        if (props.userId && data) {
            setStatus(data);
        }
    }, [data, props.userId]);

    return (
        <aside>
            <img src={props.bookCover} alt="Book Cover" />

            <div className={styles["btn-group"]}>
                {status && status !== "Not found" ? (
                    <div onClick={toggleModalAddList}>
                        <button className={styles["active-button"]}>
                            <FontAwesomeIcon className={styles["icon"]} icon={faPen} />
                            {status}
                        </button>
                    </div>
                ) : (
                    <div onClick={toggleModalAddList}>
                        <PrimaryButton btnContent="Quero Ler" />
                    </div>
                )}
                <PrimaryButton btnContent="Avaliar" />
            </div>

            {
                props.userId &&
                <ModalAddList
                    userId={props.userId}
                    bookId={props.bookId}
                    status={status}
                    modalShow={modalAddList}
                    onClose={toggleModalAddList}
                    onOpenCreateList={openCreateListModal}
                />
            }

            {
                props.userId &&
                <ModalCreateList
                    bookId={props.bookId}
                    userId={props.userId}
                    modalShow={modalCreateList}
                    onClose={closeCreateListModal}
                    onOpenPreviousModal={openAddListModal}
                />
            }
        </aside>
    );
}
