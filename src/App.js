import "./styles/App.css";
import { useState, useEffect } from "react";
import NoteItem from "./components/NoteItem";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
  const [notes, setNotes] = useState(
    localStorage.getItem("notes") !== null
      ? JSON.parse(localStorage.getItem("notes"))
      : []
  );
  const [modal, setModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = (newNotes) => {
    setNotes([...notes, newNotes]);
    setModal(false);
  };

  const removeNote = (note) => {
    setNotes(notes.filter((p) => p.id !== note.id));
  };

  const updateState = () => {
    setNotes([...notes]);
  };

  return (
    <div className="App">
      <div className="header">
        {" "}
        <h1> MY ToDo List </h1>
      </div>
      <h3 style={{ color: "black", textAlign: "center" }}>
        Add your note right now!
        <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
          {" "}
          Add Note{" "}
        </MyButton>
      </h3>
      <MyModal visible={modal} setVisible={setModal}>
        <NoteForm create={createNote} />
      </MyModal>
      <NoteList
        update={updateState}
        remove={removeNote}
        setNotes={setNotes}
        notes={notes}
      />
    </div>
  );
}

export default App;
