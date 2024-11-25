import { List } from "../../../../interfaces/Book";
import style from "./UserListsSideFilters.module.css";
import useCreateList from "../../../../hooks/List/useCreateList";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ModalDeleteList from "../../../../common/ModalDeleteList/ModalDeleteList";


interface UserListsSideFiltersProps {
    userId: string | undefined,
    currentFilter: string;
    setFilter: (filter: string) => void;
    customLists: List[] | undefined;
    readedNumber: number | undefined,
    toReadingNumber: number | undefined,
    readingNumber: number | undefined
}

export default function UserListsSideFilters({ userId, currentFilter, setFilter, customLists, readedNumber, toReadingNumber, readingNumber }: UserListsSideFiltersProps) {
    const [modalShow, setModalShow] = useState<boolean>(false)
    const [addInput, setAddInput] = useState<boolean>();
    const addListInput = useRef<HTMLInputElement>(null);

    function toggleAddInput() {
        setAddInput(!addInput);
    }

    function toogleModal() {
        setModalShow(!modalShow);
    }

    async function createList() {
        const inputContent = addListInput.current?.value
        if (inputContent && userId) {
            await useCreateList(userId, "", inputContent, false)
        } else {
            alert("Digite algum nome para lista!")
        }
    }

    return (
        <aside className={style["side-filters-container"]}>
            <h4 className={style["title-section"]}>Listas</h4>
            <ul className={style["user-lists"]}>
                <li
                    className={`${style["list-item"]} ${currentFilter === "todos" ? style["actived"] : ""}`}
                    onClick={() => setFilter("todos")}
                >
                    Todos
                </li>
                <li
                    className={`${style["list-item"]} ${currentFilter === "lido" ? style["actived"] : ""}`}
                    onClick={() => setFilter("lido")}
                >
                    Lido {readedNumber ?  `(${readedNumber})` : "(0)"}
                </li>
                <li
                    className={`${style["list-item"]} ${currentFilter === "lendo" ? style["actived"] : ""}`}
                    onClick={() => setFilter("lendo")}
                >
                    Lendo {toReadingNumber ? `(${toReadingNumber})` : "(0)"}
                </li>
                <li
                    className={`${style["list-item"]} ${currentFilter === "quero ler" ? style["actived"] : ""}`}
                    onClick={() => setFilter("quero ler")}
                >
                    Quero Ler {readingNumber ? `(${readingNumber})` : "(0)"}
                </li>
                {customLists && customLists.map(list => (
                    <div className={style["custom-list"]} key={list._id}>
                        <li
                            className={`${style["list-item"]} ${currentFilter === list.name ? style["actived"] : ""}`}
                            onClick={() => setFilter(list.name)}
                        >
                            {list.name + " " + `(${list.books.length})`}
                        </li>

                        <FontAwesomeIcon onClick={toogleModal} icon={faX} className={style["icon"]} />

                        <ModalDeleteList listId={list._id} listname={list.name} modalShow={modalShow} onClose={toogleModal} userId={userId}/>
                    </div>
                ))}

                <button className={style["button-add-list"]} onClick={toggleAddInput}>Adicionar</button>

                {
                    addInput ?
                        <div className={style["input-create-List"]}>
                            <input type="text" ref={addListInput}></input>
                            <button onClick={createList}>Criar</button>
                        </div>
                        :
                        <></>
                }
            </ul>

            <h4 className={style["title-section"]}>Buscar Livros</h4>
            <ul className={style["user-lists"]}>
                <li>Recomendações</li>
                <li>Explorar</li>
            </ul>
        </aside>
    );
}