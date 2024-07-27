import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';
import { toast } from 'react-toastify';
import './index.css';

const App = () => {
    const [notes, setNotes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = (note) => {
        setNotes([note, ...notes]);
        toast.success('Note added!');
        navigate('/');
    };

    const updateNote = (updatedNote) => {
        const updatedNotes = notes.map((note) =>
            note.id === updatedNote.id ? updatedNote : note
        );
        setNotes(updatedNotes);
        toast.success('Note updated!');
        navigate('/');
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
        toast.success('Note deleted!');
    };

    const filteredNotes = notes.filter(
        (note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex items-center justify-center  flex-col ">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center m-4 p-4 uppercase font-serif text-black mb-8 tracking-wide leading-snug shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
                Note Taking Application
            </h1>


            <div className="flex items-center justify-center mb-4 flex-wrap">
                <input
                    type="text"
                    placeholder="Dynamic Searching ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-black border-4 rounded-xl p-2 w-full sm:w-72 text-sm sm:text-base"
                />

                <Link
                    to="/add"
                    className="bg-blue-500 border-4 border-black rounded-xl font-bold text-sm sm:text-xl text-white p-2 m-2 flex items-center justify-center"
                >
                    Add Note
                </Link>
            </div>

            <Routes>
                <Route
                    path="/"
                    element={<NoteList notes={filteredNotes} deleteNote={deleteNote} />}
                />
                <Route path="/add" element={<NoteForm saveNote={addNote} />} />
                <Route
                    path="/edit/:id"
                    element={<NoteForm notes={notes} saveNote={updateNote} />}
                />
                <Route path="/note/:id" element={<NoteDetail notes={notes} />} />
            </Routes>
        </div>
    );
};

export default App;
