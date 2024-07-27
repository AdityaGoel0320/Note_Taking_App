import React from 'react';
import { Link } from 'react-router-dom';

const NoteItem = ({ note, deleteNote }) => {
  return (
    <div className='shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] border-2 rounded-xl m-6 p-4 w-full sm:w-80 flex flex-col relative'>
      <small className="flex items-end justify-end mb-2 font-semibold text-gray-400 font-mono text-xs sm:text-sm md:text-base">{note.timestamp}</small>
      <div className='flex flex-col flex-1'>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold mb-2">{note.title.substring(0,10)}..</h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-sans mb-4">{note.content.substring(0, 20)}...</p>

        <div className='flex justify-center items-center gap-4'>
          <Link to={`/edit/${note.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded font-sans text-xs sm:text-sm md:text-base ">
            <i className="fa-solid fa-pen"></i>
          </Link>
          <button onClick={() => deleteNote(note.id)} className="bg-red-500 text-white px-4 py-2 rounded font-sans text-xs sm:text-sm md:text-base hover:border-black hover:bg-black">
            <i className="fa-solid fa-trash"></i>
          </button>
          <Link to={`/note/${note.id}`} className="bg-blue-500 text-white px-4 py-2 rounded font-sans text-xs sm:text-sm md:text-base hover:border-black hover:bg-black">
            <i className="fa-solid fa-eye  "></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
