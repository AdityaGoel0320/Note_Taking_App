import React from 'react';
import { useParams } from 'react-router-dom';

const NoteDetail = ({ notes }) => {
  const { id } = useParams();
  const note = notes.find((note) => note.id === id);

  if (!note) {
    return <div className="text-center text-red-500">Note not found</div>;
  }

  return (
    <div className=" shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-white  rounded-lg p-4 w-[70vw] h-[80vh] overflow-y-auto overflow-x-hidden flex items-center justify-center flex-col m-4" >
      <small className="text-gray-500 mb-2  ">{note.timestamp}</small>
      <h2 className="text-2xl font-bold mb-2 capitalize">{note.title}</h2>
      <textarea
        className=" w-full h-full resize-none overflow-y-auto p-2"
        readOnly
        value={note.content}
      />

    </div>
  );
};

export default NoteDetail;
