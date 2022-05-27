
import {Message} from './components/Message'

import "./index.css"

function App() {

    const messagesList = [
        "Первое сообщение",
        "Второе сообщение",
        "Третье сообщение",
    ];

  return (
    <div className="app">

        <h2>
            Одно сообщение:
        </h2>

        <Message text="Привет! Это тестовое сообщение" />

        <h2>
            Список:
        </h2>

        {messagesList.map((item, index) => <Message text={item} user_num={index} key={index}/>)}


        <div style={{ clear: 'both' }}></div>
    </div>
  );
}

export default App;
