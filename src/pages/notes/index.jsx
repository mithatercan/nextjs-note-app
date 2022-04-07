import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const SkipSSR = dynamic(() => import("../../components/SkipSSR"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Notes = ({ notes }) => {
  return (
    <div className='notes-view'>
      <div className='notes-container'>
        {notes.map((note) => (
          <div className='note-link-card' key={note.id}>
            <Link href='/notes/[id]' as={`/notes/${note.id}`}>
              <a>
                <div>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <hr />
      <SkipSSR />
    </div>
  );
};

export default Notes;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/note`);
  const { data } = await res.json();
  return {
    props: { notes: data },
  };
}
