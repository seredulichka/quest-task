import React, { useState, useEffect } from "react";
import NoteList from "./NoteList";

const Note = ({ classes, userLogin }) => {
  const [newNote, setNewNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isNeedUpdate, setIsNeedUpdate] = useState(true);
  const [notesData, setNotesData] = useState(null);

  const handleUpdate = () => {
    setIsNeedUpdate(true);
  };

  const handleNote = (event) => {
    event.preventDefault();
    setNewNote(event.target.value);
  };

  const createNote = (event) => {
    event.preventDefault();
    fetch("https://notes.aksonov.pp.ua/add-notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        login: userLogin,
        content: newNote,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setIsNeedUpdate(true);
        } else {
          throw new Error("Error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setNewNote("");
  };

  const updateNotes = () => {
    fetch(`https://notes.aksonov.pp.ua/user-get-notes/${userLogin}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsNeedUpdate(false);
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        setNotesData(data);
        setIsLoading(false);
        setIsNeedUpdate(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isNeedUpdate) {
      setIsLoading(true);
      updateNotes();
    }
  }, [isNeedUpdate]);

  return (
    <React.Fragment>
      <NoteList
        isLoading={isLoading}
        handleNote={handleNote}
        newNote={newNote}
        createNote={createNote}
        handleUpdate={handleUpdate}
        className={classes.myNotes}
        notesData={notesData}
      />
    </React.Fragment>
  );
};

export default Note;
