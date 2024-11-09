import { useState, useContext, useEffect } from 'react';
import style from "./UserConfigForm.module.css";
import PrimaryButton from "../../../../common/PrimaryButton/PrimaryButton";
import { AuthContext } from '../../../../context/AuthContextUser';
import { User } from '../../../../interfaces/Book';
import getUserProfile from '../../../../hooks/user/getUserProfile';
import { useNavigate } from "react-router-dom";
import useUpdateUser from '../../../../hooks/user/useUpdateUser';

export default function UserConfigForm() {
    const { user, loading, error } = getUserProfile();
    const isAuthenticated = useContext(AuthContext)?.isAuthenticated;
    const [profileData, setProfileData] = useState<User | undefined>();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [realname, setRealname] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [aboutMe, setAboutMe] = useState("");

    const { updateUser, loading: updateLoading, error: updateError } = useUpdateUser();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (user) {
            setProfileData(user);
        }
    }, [user]);
    useEffect(() => {
        if (profileData) {
            setUsername(profileData.username || "");
            setRealname(profileData.realname || "");
            setCountry(profileData.country || "");
            setCity(profileData.city || "");
            setAboutMe(profileData.aboutMe || "");
        }
    }, [profileData]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const updatedData = {
            username,
            realname,
            country,
            city,
            aboutMe
        };

        if (profileData) {
            await updateUser(profileData._id, updatedData);
        }
    };

    if (loading || updateLoading) return <p>Carregando...</p>;
    if (error || updateError) return <p>Erro: {error || updateError}</p>;
    if (!profileData) return <p>Usuário não encontrado</p>;

    return (
        <form className={style["form-config"]} onSubmit={handleSubmit}>
            <h4>Geral</h4>

            <div className={style["input-box"]}>
                <label>username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>

            <div className={style["input-box"]}>
                <label>nome verdadeiro</label>
                <input
                    type="text"
                    value={realname}
                    onChange={(e) => setRealname(e.target.value)}
                />
            </div>

            <h4>Informações</h4>

            <div className={style["input-box"]}>
                <label>País</label>
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>

            <div className={style["input-box"]}>
                <label>Cidade</label>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            <h4>Bio</h4>

            <div className={style["input-box"]}>
                <textarea
                    rows={12}
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                ></textarea>

                <PrimaryButton btnContent="Salvar Alterações" />
            </div>
        </form>
    );
}