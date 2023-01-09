import React from "react";
import s from "./NoteItem.module.css";
import MyButton from "./UI/button/MyButton";
import { useState } from "react";
import MyInput from "./UI/input/MyInput";

const NoteItem = (props) => {
  const [edit, setEdit] = useState(null);
  const [valueTitle, setValueTitle] = useState(props.note.title);
  const [valueBody, setValueBody] = useState(props.note.body);

  const editNote = (id) => {
    setEdit(id);
  };
  const updateState = () => {
    props.note.title = valueTitle;
    props.note.body = valueBody;
    setEdit(null);
    props.update();
  };

  return (
    <div className="note">
      {edit == props.note.id ? (
        <div>
          <MyInput
            value={valueTitle}
            onChange={(e) => setValueTitle(e.target.value)}
          />
          <MyInput
            value={valueBody}
            onChange={(e) => setValueBody(e.target.value)}
          />
          <MyButton onClick={updateState}>Сохранить</MyButton>
        </div>
      ) : (
        <div
          className={props.note.status ? [s.close, s.text].join(" ") : s.text}
        >
          <h4>
            {props.number}.{props.note.title}
          </h4>
          <div>{props.note.body}</div>
        </div>
      )}
      {props.note.status ? (
        <MyButton onClick={() => props.status(props.note)}>Open note</MyButton>
      ) : (
        <div className="note_buttons">
          <div key={props.note.id}></div>
          <MyButton
            onClick={() =>
              editNote(props.note.id, props.note.title, props.note.body)
            }
          >
            Edit
          </MyButton>
          <MyButton onClick={() => props.status(props.note)}>
            Close note
          </MyButton>
          <MyButton onClick={() => props.remove(props.note)}>
            Remove note
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default NoteItem;
