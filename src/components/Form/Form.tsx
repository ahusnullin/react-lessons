import React, {useState, useRef, FC} from "react";
// @ts-ignore
import style from "./form.module.less"
import {MessageInterface, UserInterface} from "../../common-types";

interface FormProps {
    sendMessage: (msg: MessageInterface) => void
}

const Me: UserInterface = {
    name: "User",
    avatar: "https://picsum.photos/id/18/100",
}

export const Form: FC<FormProps> = ({sendMessage}) => {
    const [message, setMessage] = useState('');
    const textarea = useRef();

    return <div className={style.form_wrapper}>
        <textarea placeholder="Введите сообщение" ref={textarea}
                  onChange={(e) => {setMessage(e.target.value); } }>
        </textarea>
        <button className="test" type="button" onClick={() => {
            sendMessage({ author: Me, text: message});
            textarea.current.value = '';
        }}>
            Отправить
        </button>
    </div>
}