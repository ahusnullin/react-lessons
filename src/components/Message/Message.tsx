import style from './message.module.less';
import { FC } from 'react';
import { MessageInterface } from '../../common-types';

interface MessageProps {
  data: MessageInterface[];
  key: number;
}

export const Message: FC<MessageProps> = ({ data }) => {
  return (
    <div className={style.message}>
      <div className={style.avatar}>
        <img src="https://picsum.photos/id/18/100" alt="" />
      </div>
      <div className={style.text}>
        <div className={style.author_name}>{data.author.name}</div>
        {data.text}
      </div>
    </div>
  );
};
