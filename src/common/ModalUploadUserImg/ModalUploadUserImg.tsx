import { useEffect, useRef, useState } from "react";
import useUploadUserImg from "../../hooks/user/useUploadUserImg";
import style from "./ModalUploadUserImg.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalUploadUserImgProps {
    modalShow: boolean;
    onClose: () => void;
}

export default function ModalUploadUserImg(props: ModalUploadUserImgProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { uploadUserImg, uploading, error, imageUrl } = useUploadUserImg();
    const [file, setFile] = useState<File | null>(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (props.modalShow) {
            dialog?.showModal();
            dialog?.focus();
        } else {
            dialog?.close();
        }
    }, [props.modalShow]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            await uploadUserImg(file);
        }
    };

    return (
        <dialog className={style["modal-container"]} ref={dialogRef}>
            <div className={style["box"]}>
                <div className={style["title-box"]}>
                    <h2>Escolha uma imagem de perfil</h2>
                    <div onClick={props.onClose} className={style["close-icon"]}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>

                <div className={style["btn-box"]}>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className={style["file-input"]}
                    />

                    <button
                        onClick={handleUpload}
                        disabled={uploading || !file}
                        className={style["upload-button"]}
                    >
                        {uploading ? "Enviando..." : "Enviar Imagem"}
                    </button>
                </div>

                {error && <p className={style["error-message"]}>{error}</p>}
                {imageUrl && (
                    <div className={style["image-preview"]}>
                        <p>Imagem enviada com sucesso!</p>
                        <img src={imageUrl} alt="Imagem do perfil" width={200} />
                    </div>
                )}
            </div>
        </dialog>
    );
}