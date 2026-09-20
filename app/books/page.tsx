import Books from "../components/Books";

const getBooks = async () => {
  const res = await fetch("http://localhost:3001/books");
  if (!res.ok) {
    throw new Error("Failed to load data");
  }
  return res.json();
};

const page = async () => {
  const books = await getBooks();

  return (
    <div>
      <h1>Books: {books.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        {books.map((book) => (
          <Books key={book.id} book={book}></Books>
        ))}
      </div>
    </div>
  );
};

export default page;
