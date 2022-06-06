import React, {useState, useRef} from "react";
import style from "./form.module.less"

export const Form = ({sendMessage: sendMessage}) => {
    const [message, setMessage] = useState('');
    const textarea = useRef();

    return <div className={style.form_wrapper}>
        <textarea placeholder="Введите сообщение" ref={textarea}
                  onChange={(e) => {setMessage(e.target.value); } }>
        </textarea>
        <button type="button" onClick={() => {
            sendMessage({ author: 'Me', text: message});
            textarea.current.value = '';
        }}>
            Отправить
        </button>
    </div>
}