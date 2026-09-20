import Link from "next/link";
import React from "react";

const Books = ({ book }) => {
  const { id, title, price, year } = book;
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <p>{year}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <Link href={`/books/${id}`}>
            <button className="btn btn-primary">Show Detail</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Books;
