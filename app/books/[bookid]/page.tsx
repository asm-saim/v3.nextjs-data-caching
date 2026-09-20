import { IBooks } from "@/types";

//generateStaticParams: dynamic pages should be generated statically ahead of time.
export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/books");
  const books = await res.json();

  return books.map((book: { id: number }) => ({
    id: String(book.id),
  }));
}

const BookPage = async ({ params }: { params: Promise<{ bookid: string }> }) => {
  const { bookid } = await params;

  const res = await fetch(`http://localhost:3001/books/${bookid}`);
  const book: IBooks = await res.json();

  return (
    <div className="border rounded-2xl p-5 mx-auto">
      <h1>{book.title}</h1>
      <h1>{book.id}</h1>
      <h1>{book.price}</h1>
      <h1>{book.rating}</h1>
    </div>
  );
};

export default BookPage;
