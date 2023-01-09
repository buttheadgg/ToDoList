import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import NoteList from "./NoteList";

const NoteForm = ({ create }) => {
  const [note, setNote] = useState({ title: "", body: "", status: false });

  const addNewNote = (e) => {
    e.preventDefault();
    const newNote = {
      ...note,
      id: Date.now(),
    };
    create(newNote);
    setNote({ title: "", body: "", status: false });
  };



  return (
    <div>
      <form>
        <MyInput
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          type="text"
          placeholder="Name of note"
        />
        <MyInput
          value={note.body}
          onChange={(e) => setNote({ ...note, body: e.target.value })}
          type="text"
          placeholder="Body of note"
        />
        <MyButton onClick={addNewNote}>Add Note</MyButton>
      </form>
    </div>
  );
};

export default NoteForm;
