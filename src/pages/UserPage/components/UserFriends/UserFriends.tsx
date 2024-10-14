import style from "./UserFriends.module.css";


export default function UserFriends() {

    return (
        <div className={style["container"]}>

            <div className={style["title-row"]}>
                <h4>Amigos</h4>
            </div>

            <div className={style["friends-list"]}>
                <div className={style["friend-row"]}>
                    <img className={style["friend-avatar"]} src="https://www.hollywoodreporter.com/wp-content/uploads/2011/06/drive_primary.jpg?w=1440&h=810&crop=1"></img>
                    <p>Username</p>
                </div>
            </div>

        </div>
    )
}