import { useEffect, useState } from "react";
import getUserProfile from "../../hooks/getUserProfile";

import { User } from "../../interfaces/Book";

export default function UserPage() {

    const { user, loading, error } = getUserProfile();

    const [ profileData, setProfileData ] = useState<User>();

    useEffect(() => {
        if(user){
            setProfileData(user)
        }
    }, [user, error])

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;

    return (
        <div>

            <h1>User ID: {profileData?.username}</h1>

            <h1>User ID: {profileData?._id}</h1>

        </div>
    )
}