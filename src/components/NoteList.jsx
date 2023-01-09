import React from "react";
import NoteItem from "./NoteItem";
import { useState } from "react";

const NoteList = ({ notes, remove, setNotes, update }) => {
  const statusNote = (note) => {
    const newTodo = [...notes].map((p) => {
      if (p.id === note.id) {
        p.status = !p.status;
      }
      return p;
    });
    setNotes(newTodo);
  };



  return (
    <div>
      {" "}
      {notes.map((note, index) => (
        <NoteItem
          update={update}
          status={statusNote}
          remove={remove}
          number={index + 1}
          note={note}
          key={note.id}
        />
      ))}
    </div>
  );
};

export default NoteList;
