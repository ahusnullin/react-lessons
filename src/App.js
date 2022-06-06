import React, {useCallback, useEffect, useState} from "react";

import style from "./common.module.less"
import {Message} from "./components/Message/Message";
import {Form} from "./components/Form/Form";

export const App = () => {
    const [messagesList, setMessagesList] = useState([]);

    useEffect(() => {
        setMessagesList(
            [
                {
                    author: 'Ваня',
                    text: 'Привет от Вани!',
                },
                {
                    author: 'Вася',
                    text: 'Привет от Васи!',
                },
                {
                    author: 'Петя',
                    text: 'Привет от Пети!',
                },
                {
                    author: 'Света',
                    text: 'Привет от Светы!',
                }
            ]
        )
    }, []);

    useEffect(() => {
        if (messagesList.length && messagesList.slice(-1)[0]?.author !== 'Bot') {
            setTimeout(() => {
                setMessagesList([ ...messagesList, {
                    author: 'Bot',
                    text: `Это автоматический ответ для: ${messagesList.slice(-1)[0]?.author}`,
                } ])
            }, 1500);
        }
    }, [messagesList]);


    const sendMessage = (messageObj) => {
        setMessagesList([ ...messagesList, messageObj ])
    }

    return <div className={style.wrapper}>
        <div className={style.content}>
            {messagesList.map((data, index) => <Message data={data} key={index}/>)}
            <Form sendMessage={sendMessage}/>
            <div style={{ clear: 'both'}}></div>
        </div>


    </div>
}