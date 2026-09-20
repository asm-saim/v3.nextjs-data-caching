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
      {books.map((book) => (
        <Books key={book.id} books={book}></Books>
      ))}
    </div>
  );
};

export default page;
