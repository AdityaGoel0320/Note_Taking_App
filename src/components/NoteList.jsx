import React, { useState } from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';

const NoteList = ({ notes, deleteNote }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const notesPerPage = 10;

    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="flex items-center flex-wrap  justify-center  ">
                {currentNotes.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg mt-4">
                        No notes found. Try a different search term.
                    </div>
                ) : null}
                {currentNotes.map((note) => (
                    <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
                ))}
            </div>
            <div className='mt-8'>

                <Pagination

                    notesPerPage={notesPerPage}
                    totalNotes={notes.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default NoteList;
