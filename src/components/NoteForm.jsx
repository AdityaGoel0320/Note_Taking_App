import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const NoteForm = ({ saveNote, notes }) => {
  const { id } = useParams();
  const existingNote = notes?.find((note) => note.id === id);

  const [note, setNote] = useState({
    id: existingNote ? existingNote.id : Date.now().toString(),
    title: existingNote ? existingNote.title : '',
    content: existingNote ? existingNote.content : '',
    timestamp: existingNote
      ? existingNote.timestamp
      : new Date().toLocaleString(),
  });

  const [charCount, setCharCount] = useState(note.title.length);

  useEffect(() => {
    if (existingNote) {
      setNote({
        ...existingNote,
      });
      setCharCount(existingNote.title.length);
    }
  }, [existingNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setCharCount(value.length);
      if (value.length > 30) {
        toast.warn('Title cannot exceed 30 characters');
        return;
      }
    }
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!note.title.trim()) {
      toast.error('Title is compulsory!');
      return;
    }

    if (note.title.length > 30) {
      toast.error('Title cannot exceed 30 characters!');
      return;
    }

    saveNote({
      ...note,
      timestamp: new Date().toLocaleString(),
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl w-[80vw] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="relative">
          <input
            type="text"
            name="title"
            placeholder="Title (Compulsory)"
            value={note.title}
            onChange={handleChange}
            maxLength="30"
            className="p-2 border-2 border-black rounded-xl w-full"
          />
          <span className="absolute right-2 bottom-2 text-gray-500 text-xs">
            {charCount}/30
          </span>
        </div>
        <textarea
          name="content"
          placeholder="Content"
          value={note.content}
          onChange={handleChange}
          required
          className="p-2 border-2 border-black rounded-xl h-32 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Note
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
