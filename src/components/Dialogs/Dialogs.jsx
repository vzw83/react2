import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
<>
<DialogItem />
<Message />
</>



const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Vova" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sergey" },
    { id: 4, name: "Olga" },
    { id: 5, name: "Lexa" },
  ];

  let messages = [
    { id: 1, message: "привет" },
    { id: 2, message: "как дела?" },
    { id: 3, message: "учу реакт" },
  ];

  let dialogsElement = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messages.map( m => <Message message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
