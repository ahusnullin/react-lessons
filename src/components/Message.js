import {User} from "./User";
import style from "./message.module.css"

/**
 * Функциональный компонент
 */
export const Message = ({text: message, user_num: user_num}) => {
    return <div className={style.message_item}>
        <div className={style.user}>
            <User num={user_num} />
        </div>
        <div className={style.message_text}>
            {message}
        </div>
    </div>
}