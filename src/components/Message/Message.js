import React from "react";
import style from "./message.module.less"

export const Message = ({ data: data}) => {

    return <div className={style.message}>
        <div className={style.avatar}>
            <img src="https://picsum.photos/id/18/100" alt="" />
        </div>
        <div className={style.text}>
            <div className={style.author_name}>
                {data.author}
            </div>
            {data.text}
        </div>


    </div>
}