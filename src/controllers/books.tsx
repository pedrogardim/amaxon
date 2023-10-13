import { db } from "../db";
import { BookGrid } from "../components/BookGrid";
import { Book } from "../types/books";

export const getAllBooks = () => {
  const booksList = db.query("select * from books;").all() as Book[];

  return <BookGrid booksList={booksList} />;
};
