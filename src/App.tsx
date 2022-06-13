import { FC, useEffect, useState } from 'react';
import { Message } from './components/Message/Message';
import { MessageInterface } from './common-types';
import style from './app.module.less';
import { Form } from './components/Form/Form';

export const App: FC = () => {
  const [messagesList, setMessagesList] = useState<MessageInterface[]>([]);

  useEffect(() => {
    setMessagesList([
      {
        author: {
          name: 'Ваня',
          avatar: 'https://picsum.photos/id/18/100',
        },
        text: 'Привет от Вани!',
      },
      {
        author: {
          name: 'Вася',
          avatar: 'https://picsum.photos/id/10/100',
        },
        text: 'Привет от Васи!',
      },
      {
        author: {
          name: 'Петя',
          avatar: 'https://picsum.photos/id/15/100',
        },
        text: 'Привет от Пети!',
      },
      {
        author: {
          name: 'Света',
          avatar: 'https://picsum.photos/id/19/100',
        },
        text: 'Привет от Светы!',
      },
    ]);
  }, []);

  useEffect(() => {
    if (
      messagesList.length &&
      messagesList.slice(-1)[0]?.author.name !== 'Bot'
    ) {
      setTimeout(() => {
        setMessagesList([
          ...messagesList,
          {
            author: {
              name: 'Bot',
              avatar: 'https://picsum.photos/id/10/100',
            },
            text: `Это автоматический ответ для: ${
              messagesList.slice(-1)[0]?.author.name
            }`,
          },
        ]);
      }, 1500);
    }
  }, [messagesList]);

  const sendMessage = (messageObj: MessageInterface) => {
    setMessagesList([...messagesList, messageObj]);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        {messagesList.map((data, index) => (
          <Message data={data} key={index} />
        ))}
        <Form sendMessage={sendMessage} />
        <div style={{ clear: 'both' }}> </div>
      </div>
    </div>
  );
};
