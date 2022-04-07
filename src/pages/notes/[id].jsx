import Link from "next/link";

const Note = ({ note }) => {
  return (
    <div className='note-view'>
      <div className='note-container'>
        <h1>Note: {note.id}</h1>
        <p>{note.title}</p>
        <Link href='/notes'>
          <a>Back to notes</a>
        </Link>
      </div>
    </div>
  );
};

export default Note;

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);
  // so much power!
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();
  if (data) {
    return {
      props: { note: data },
    };
  }
}
