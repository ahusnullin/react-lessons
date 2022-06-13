import { useState, useRef, FC } from 'react';
import style from './form.module.less';
import { MessageInterface, UserInterface } from '../../common-types';

interface FormProps {
  sendMessage: (msg: MessageInterface) => void;
}

const Me: UserInterface = {
  name: 'User',
  avatar: 'https://picsum.photos/id/18/100',
};

export const Form: FC<FormProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const textarea = useRef<HTMLTextAreaElement>();

  const handleClick = () => {
    sendMessage({ author: Me, text: message });
    textarea.current.value = '';
  };

  return (
    <div className={style.form_wrapper}>
      <textarea
        placeholder="Введите сообщение"
        ref={textarea}
        data-testid="form-textarea"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <button className="test" type="button" onClick={handleClick}>
        Отправить
      </button>
    </div>
  );
};
